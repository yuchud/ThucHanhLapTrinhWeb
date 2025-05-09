

export async function GET(request: Request) {
    const users = [
        { id: 1, name: "Huy", age: 15 },
        { id: 2, name: "Hung", age: 28 },
        { id: 3, name: "Hoang", age: 22 },
    ]

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    })
}