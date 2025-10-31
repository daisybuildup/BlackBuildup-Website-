import { NextResponse } from 'next/server'
import { getPrograms } from '../../../../lib/api'

export async function GET() {
  const program = await getPrograms()
  console.log(program)
  return NextResponse.json(program)
}
