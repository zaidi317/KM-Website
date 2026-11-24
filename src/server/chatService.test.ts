import test from 'node:test';
import assert from 'node:assert/strict';
import { CANONICAL_ENTITY_DEFINITION } from '../config/siteConfig';
import {
  buildSystemInstruction,
  prepareChatRequest,
  resolveChatModel,
} from './chatService.ts';

test('resolveChatModel routes strategist to gemini-4-hydrogen and quick-guide to gemini-3.1-flash-lite', () => {
  assert.equal(resolveChatModel('strategist'), 'gemini-4-hydrogen');
  assert.equal(resolveChatModel(undefined), 'gemini-4-hydrogen');
  assert.equal(resolveChatModel('quick-guide'), 'gemini-3.1-flash-lite');
});

test('buildSystemInstruction includes canonical entity, 40 services, phone, and honesty rules', () => {
  const enInstr = buildSystemInstruction('strategist', 'en');
  assert.ok(enInstr.includes(CANONICAL_ENTITY_DEFINITION));
  assert.ok(enInstr.includes('0321-2995766'));
  assert.ok(enInstr.includes('(40) Workshops & training'));
  assert.ok(enInstr.includes('Roman Urdu'));
  assert.ok(enInstr.includes('Do NOT quote invented PKR or USD prices'));

  const urInstr = buildSystemInstruction('quick-guide', 'ur');
  assert.ok(urInstr.includes('Quick Digital Growth Guide'));
  assert.ok(urInstr.includes('آسان عام فہم اردو'));
});

test('prepareChatRequest splits multi-turn history and validates latest user message', () => {
  const prepared = prepareChatRequest({
    roleId: 'strategist',
    language: 'en',
    messages: [
      { role: 'user', text: 'Do you build school websites?' },
      { role: 'model', text: 'Yes, we build websites with integrated copy for schools.' },
      { role: 'user', text: 'How long does SEO take?' },
    ],
  });

  assert.equal(prepared.model, 'gemini-4-hydrogen');
  assert.equal(prepared.history.length, 2);
  assert.equal(prepared.history[0].role, 'user');
  assert.equal(prepared.history[1].role, 'model');
  assert.equal(prepared.latestMessage, 'How long does SEO take?');
});

test('prepareChatRequest rejects empty or non-user trailing payloads', () => {
  assert.throws(() => prepareChatRequest({ messages: [] }), /At least one chat message/);
  assert.throws(
    () => prepareChatRequest({ messages: [{ role: 'model', text: 'Hi' }] }),
    /latest chat turn/
  );
});
