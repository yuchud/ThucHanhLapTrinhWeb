export async function POST(request: Request) {
  const { username, password } = await request.json();
  const accounts = [
    { id: 1, username: "huy", password: "123456", user_id: 1 },
    { id: 2, username: "hung", password: "123456", user_id: 2 },
    { id: 3, username: "hoang", password: "123456", user_id: 3 },
  ];

  if (!username || !password) {
    return new Response(
      JSON.stringify({ error: "Username and password are required" }),
      {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
  const account = accounts.find(
    (account) => account.username === username && account.password === password
  );
  if (!account) {
    return new Response(
      JSON.stringify({ error: "Invalid username or password" }),
      {
        status: 401,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(JSON.stringify({ message: "Login succesfully" }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
