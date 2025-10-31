import { NextResponse } from 'next/server'
import { getPrograms } from '../../../../lib/api'

export const revalidate = 60; 

export async function GET() {
  const program = await getPrograms()
  console.log(program)
  return NextResponse.json(program)
}
