import { generateChatReply } from '../../src/server/chatService.ts';

type NetlifyEvent = {
  httpMethod: string;
  body: string | null;
};

export const handler = async (event: NetlifyEvent) => {
  const headers = { 'content-type': 'application/json; charset=utf-8' };

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...headers, allow: 'POST' },
      body: JSON.stringify({ error: 'Method not allowed.' }),
    };
  }

  let input: unknown;
  try {
    input = JSON.parse(event.body ?? '');
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Request body must be valid JSON.' }),
    };
  }

  try {
    const result = await generateChatReply(input, process.env.GEMINI_API_KEY);
    return { statusCode: 200, headers, body: JSON.stringify(result) };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to process chat request right now.';
    const status = message.includes('GEMINI_API_KEY')
      ? 503
      : message.includes('must') || message.includes('required') || message.includes('At least')
        ? 400
        : 502;
    return { statusCode: status, headers, body: JSON.stringify({ error: message }) };
  }
};
