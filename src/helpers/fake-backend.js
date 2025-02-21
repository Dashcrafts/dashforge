import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);
export const fakeUsers = [
  {
    id: "1",
    email: "user@demo.com",
    username: "demo_user",
    password: "123456",
    firstName: "Demo",
    lastName: "User",
    role: "User",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYXNoY3JhZnRzIiwic3ViIjoiZGFzaGNyYWZ0c3RlYW1AZ21haWwuY29tIiwibGFzdE5hbWUiOiJUZWNoemFhIiwiRW1haWwiOiJkYXNoY3JhZnRzdGVhbUBnbWFpbC5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJUZXN0VG9rZW4ifQ.peG4ADn4PkcaPRP7DCxTx-Z54Cxm9mHlMYLWbVgY_-s",
  },
  {
    id: "2",
    email: "user@demo.com",
    username: "demo_admin",
    password: "123456",
    firstName: "Admin",
    lastName: "User",
    role: "Admin",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYXNoY3JhZnRzIiwic3ViIjoiZGFzaGNyYWZ0c3RlYW1AZ21haWwuY29tIiwibGFzdE5hbWUiOiJUZWNoemFhIiwiRW1haWwiOiJkYXNoY3JhZnRzdGVhbUBnbWFpbC5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJUZXN0VG9rZW4ifQ.peG4ADn4PkcaPRP7DCxTx-Z54Cxm9mHlMYLWbVgY_-s",
  },
];
export default function configureFakeBackend() {
  mock.onPost("/login").reply(function (config) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise(function (resolve, _reject) {
      setTimeout(function () {
        // get parameters from post request
        const params = JSON.parse(config.data);
        // find if any user matches login credentials
        const filteredUsers = fakeUsers.filter((user) => {
          return (
            user.email === params.email && user.password === params.password
          );
        });
        if (filteredUsers.length) {
          // if login details are valid return user details and fake jwt token
          const user = filteredUsers[0];
          resolve([200, user]);
        } else {
          // else return error
          resolve([
            401,
            {
              error: "Email or password is incorrect",
            },
          ]);
        }
      }, 1000);
    });
  });
}
