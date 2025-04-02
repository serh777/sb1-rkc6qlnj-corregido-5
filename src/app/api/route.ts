import { NextResponse } from 'next/server';
import { AnalysisStorageService } from '@/utils/supabase/analysis-storage';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    if (!body.type || !body.data) {
      return NextResponse.json(
        { error: 'Missing required fields: type and data' },
        { status: 400 }
      );
    }
    
    // Save the analysis
    const savedAnalysis = await AnalysisStorageService.saveAnalysisServer({
      type: body.type,
      data: body.data,
      score: body.score || 0,
    }, cookies());
    
    return NextResponse.json(savedAnalysis);
  } catch (error) {
    console.error('Error in analysis API:', error);
    return NextResponse.json(
      { error: 'Failed to process analysis' },
      { status: 500 }
    );
  }
}