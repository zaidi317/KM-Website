import test from 'node:test';
import assert from 'node:assert/strict';
import {
  INITIAL_LEAD_FORM_VALUES,
  buildMailtoHref,
  isValidEmail,
  isValidOptionalUrl,
  isValidPhone,
  validateLeadForm,
} from './formValidation';

test('email validation accepts standard business emails and rejects malformed input', () => {
  assert.equal(isValidEmail('tariq@khanmarketings.com'), true);
  assert.equal(isValidEmail('info@company.co.uk'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('user@domain'), false);
  assert.equal(isValidEmail(''), false);
});

test('phone validation accepts international/local numbers and rejects invalid strings', () => {
  assert.equal(isValidPhone('+92 300 1234567'), true);
  assert.equal(isValidPhone('0321-2995766'), true);
  assert.equal(isValidPhone('(021) 3555-0192'), true);
  assert.equal(isValidPhone('12345'), false);
  assert.equal(isValidPhone('abc-def-ghij'), false);
});

test('optional URL validation allows empty string and valid domains', () => {
  assert.equal(isValidOptionalUrl(''), true);
  assert.equal(isValidOptionalUrl('khanmarketings.com'), true);
  assert.equal(isValidOptionalUrl('https://khanmarketings.com/seo'), true);
  assert.equal(isValidOptionalUrl('not a valid url'), false);
  assert.equal(isValidOptionalUrl('localhost'), false);
});

test('validateLeadForm flags missing required fields and accepts complete valid payloads', () => {
  const emptyResult = validateLeadForm(INITIAL_LEAD_FORM_VALUES);
  assert.equal(emptyResult.valid, false);
  assert.equal(emptyResult.errors.fullName, 'required_name');
  assert.equal(emptyResult.errors.email, 'required_email');
  assert.equal(emptyResult.errors.phone, 'required_phone');
  assert.equal(emptyResult.errors.company, 'required_company');
  assert.equal(emptyResult.errors.projectDetails, 'required_details');

  const validResult = validateLeadForm({
    ...INITIAL_LEAD_FORM_VALUES,
    fullName: 'Tariq Mahmood',
    email: 'tariq@company.pk',
    phone: '+92 321 4455667',
    company: 'Crescent Logistics',
    websiteUrl: 'https://crescentlogistics.pk',
    serviceRequired: 'multiple',
    budget: '1000-2500',
    projectDetails: 'We need a redesigned website with clear service pages and technical SEO.',
  });
  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});

  const adsResult = validateLeadForm({
    ...INITIAL_LEAD_FORM_VALUES,
    fullName: 'Bilal Qureshi',
    email: 'bilal@karachiretail.pk',
    phone: '03212995766',
    company: 'Qureshi Apparel',
    serviceRequired: 'ecommerce',
    projectDetails: 'Need a Shopify COD store with Meta Pixel and TikTok conversion tracking.',
  });
  assert.equal(adsResult.valid, true);
});

test('validateLeadForm blocks submissions when honeypot field is populated', () => {
  const spamResult = validateLeadForm({
    ...INITIAL_LEAD_FORM_VALUES,
    fullName: 'Bot',
    email: 'bot@spam.example',
    phone: '+1234567890',
    company: 'Spam Corp',
    projectDetails: 'Automated spam enquiry message here.',
    companyFaxTrap: 'http://spam-link.example',
  });
  assert.equal(spamResult.valid, false);
  assert.equal(spamResult.errors._form, 'spam_detected');
});

test('buildMailtoHref encodes recipient and enquiry details cleanly', () => {
  const href = buildMailtoHref(
    'hello@khanmarketings.com',
    {
      ...INITIAL_LEAD_FORM_VALUES,
      fullName: 'Amina Khan',
      email: 'amina@brand.pk',
      phone: '+92 300 5551234',
      company: 'Amina Studio',
      projectDetails: 'Looking for a bilingual website and search foundation.',
    },
    'Website Design & Development',
    'Prefer to discuss after free review'
  );
  assert.ok(href.startsWith('mailto:hello@khanmarketings.com?subject='));
  assert.ok(href.includes('Amina%20Studio'));
  assert.ok(href.includes('Website%20Design'));
});
