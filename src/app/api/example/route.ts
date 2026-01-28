import { NextResponse } from "next/server";
import { z } from "zod";

// Request body validation schema
const requestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

/**
 * POST /api/example
 *
 * Example API route demonstrating:
 * - Request validation with Zod
 * - Error handling
 * - Type-safe responses
 * - Proper HTTP status codes
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request data
    const validationResult = requestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.format(),
        },
        { status: 400 },
      );
    }

    const { name, email, message } = validationResult.data;

    // Simulate processing (replace with actual logic)
    // Example: Save to database, send email, etc.
    console.log("Processing request:", { name, email, message });

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Request processed successfully",
        data: {
          id: crypto.randomUUID(),
          name,
          email,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("API Error:", error);

    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 },
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

/**
 * GET /api/example
 *
 * Example GET endpoint
 */
export async function GET() {
  return NextResponse.json({
    message: "Example API endpoint",
    endpoints: {
      POST: {
        description: "Submit data",
        body: {
          name: "string (required)",
          email: "string (required, valid email)",
          message: "string (required, min 10 chars)",
        },
      },
      GET: {
        description: "Get API information",
      },
    },
  });
}
