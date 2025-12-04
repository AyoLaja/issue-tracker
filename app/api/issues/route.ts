import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createIssueSchema } from '../../schemas/createIssueSchema';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.flatten().fieldErrors, {
      status: 400,
    });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
