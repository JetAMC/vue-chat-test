const BOT_REPLIES = [
  'Got it, thanks for letting me know!',
  'Interesting! Tell me more.',
  'I see what you mean.',
  'Sure thing!',
  'That makes sense.',
  'Noted!',
  'Good point.',
  'Absolutely!',
  'Thanks for sharing that.',
  'Sounds good to me!',
  'I hear you.',
  'Roger that!',
]

export function getBotReply(): string {
  return BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)]
}
