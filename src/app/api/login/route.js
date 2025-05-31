// app/api/login/route.js
export async function POST(request) {
    try {
        const { identifier, password } = await request.json();

        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ identifier, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            return new Response(JSON.stringify({ message: data?.error?.message || "Login failed" }), { status: res.status });
        }

        return new Response(JSON.stringify({
            jwt: data.jwt,
            user: data.user
        }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}
