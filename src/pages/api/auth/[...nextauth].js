import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (!email) {
          return null;
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: "heritier@gmail.com",
          password: "123456",
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        let user;
        try {
          const response = await fetch(
            "https://foshizi.herokuapp.com/api/loginuser",
            requestOptions
          );
          const data = await response.json();

          const { result } = data;
          user = {
            id: result._id,
            phone: "089 848 8484",
            name: result.name,
            email: result.email,
            address: "13 Bloemendal Mowbray",
            zip: "7700",
            role: "Frontend Software Engineer",
            accessToken: "Y9/yr3NfXj4mKcp1PxX1Bnshb3Z7X+nHXwZWVkU3Uas=",
          };
        } catch (error) {
          throw new Error(error.message);
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
