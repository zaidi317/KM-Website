import test from 'node:test';
import assert from 'node:assert/strict';
import { dismissToast, enqueueToast } from './toastQueue';

test('enqueueToast appends toast notifications and caps stack size at 3', () => {
  let queue = enqueueToast([], { id: 't1', title: 'One', message: 'First' }, 100);
  queue = enqueueToast(queue, { id: 't2', title: 'Two', message: 'Second' }, 200);
  queue = enqueueToast(queue, { id: 't3', title: 'Three', message: 'Third' }, 300);
  queue = enqueueToast(queue, { id: 't4', title: 'Four', message: 'Fourth' }, 400);

  assert.equal(queue.length, 3);
  assert.deepEqual(
    queue.map((t) => t.id),
    ['t2', 't3', 't4']
  );
  assert.equal(queue[2].variant, 'success');
});

test('dismissToast removes the matching toast without mutating others', () => {
  let queue = enqueueToast([], { id: 'a', title: 'A', message: 'Msg A' }, 100);
  queue = enqueueToast(queue, { id: 'b', title: 'B', message: 'Msg B' }, 200);

  const afterDismiss = dismissToast(queue, 'a');
  assert.equal(afterDismiss.length, 1);
  assert.equal(afterDismiss[0].id, 'b');
});
