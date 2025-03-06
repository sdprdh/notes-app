const base_url = import.meta.env.VITE_API_URL;

const register = async ({ username, email, password }) => {
   try {
      const response = await fetch(`${base_url}/api/auth/register`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ username, email, password }),
      });

      return response.json();
   } catch (e) {
      return e;
   }
};

const login = async ({ username, password }) => {
   try {
      const response = await fetch(`${base_url}/api/auth/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ username, password }),
      });

      return response.json();
   } catch (e) {
      return e;
   }
};

export { login, register };
