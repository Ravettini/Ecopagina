const TOKEN_KEY = 'eco_token';
const EXPIRY_KEY = 'eco_token_expiry';
const TOKEN_DURATION = 8 * 60 * 60 * 1000; // 8 horas en milisegundos

export interface AuthCredentials {
  username: string;
  password: string;
}

export const login = (credentials: AuthCredentials): Promise<boolean> => {
  return new Promise((resolve) => {
    // Simular delay de red
    setTimeout(() => {
      const validUsername = import.meta.env.VITE_ECO_USER || 'admin';
      const validPassword = import.meta.env.VITE_ECO_PASS || 'admin123';

      if (
        credentials.username === validUsername &&
        credentials.password === validPassword
      ) {
        const expiry = Date.now() + TOKEN_DURATION;
        localStorage.setItem(TOKEN_KEY, 'authenticated');
        localStorage.setItem(EXPIRY_KEY, expiry.toString());
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500); // Simular delay de red
  });
};

export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRY_KEY);
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiry = localStorage.getItem(EXPIRY_KEY);

  if (!token || !expiry) {
    return false;
  }

  const now = Date.now();
  const expiryTime = parseInt(expiry, 10);

  if (now > expiryTime) {
    logout();
    return false;
  }

  return true;
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};


