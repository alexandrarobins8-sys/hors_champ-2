'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { AccessContent } from '@/lib/content'

export function EarlyAccessForm({ content }: { content: AccessContent }) {
  const [submitted, setSubmitted] = useState(false)
  return <form className="access-form" onSubmit={event => { event.preventDefault(); event.currentTarget.reset(); setSubmitted(true) }}>
    <label className="mono" htmlFor="email">{content.input_label}</label>
    <div className="form-row">
      <input id="email" type="email" autoComplete="email" required placeholder={content.input_label} aria-describedby="form-status" onInput={() => setSubmitted(false)} />
      <button className="action primary" type="submit">{content.button_label}<ArrowUpRight size={18} aria-hidden="true" /></button>
    </div>
    <p id="form-status" role="status" aria-live="polite" className="form-notice mono">{submitted ? content.demo_notice : content.before_notice}</p>
  </form>
}
