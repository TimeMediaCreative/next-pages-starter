/*
The VisualEditing component calls this route when draft mode is active, but the site is not rendered on Vercel or inside the Presentation tool.
*/

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handle(
  _req: NextApiRequest,
  res: NextApiResponse<void>,
): void {
  // Exit the current user from "Draft Mode".
  res.setDraftMode({ enable: false })

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}