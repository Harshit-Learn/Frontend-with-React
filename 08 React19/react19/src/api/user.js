export const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "ajay.suneja25@gmail.com" && password === "pass") {
        resolve({
          success: true,
          data: {
            email,
            username: "sunejajajay",
            token: "390434jhdour3rhne804734ehnewfdu7394jh3owdu8ew0uerhni",
          },
        });
      } else {
        reject({ success: false, error: "Invalid credentials." });
      }
    }, 1000);
  });
};
