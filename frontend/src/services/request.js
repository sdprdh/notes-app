const base_url = `${import.meta.env.VITE_API_URL}/api`;

const request = async (url, method, body) => {
   const options = {
      method,
      headers: {
         'Content-Type': 'application/json',
      },
      credentials: 'include',
   };

   if (body) {
      options.body = JSON.stringify(body);
   }
 
   try {
      const response = await fetch(url, options);

      const data = await response.json();

      return data;
   } catch (e) {
      return { error: true, message: e.message };
   }
};

export { base_url, request };
