const host = window.location.hostname;

const localRedirects = "http://localhost:5173/login";

const stagingRedirects = "";

const prodRedirects = "";

const config = {
  localhost: localRedirects,
};

export const redirects = config[host] || localRedirects;
