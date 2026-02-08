export const API_BASE_URL = "http://127.0.0.1:8000/";

export const appConfig = {
    title: "DBOE-Editor",
    title_short: "DBOEe",
    api_base_url: `${API_BASE_URL}`,
    auth_url: `${API_BASE_URL}api-token-auth/`,
    code_repo_url: "https://github.com/csae8092/dboe-frontend-shadcn",
}

export const routeMapper = {
    belege: {
        label: "Belege",
        api_url: `${API_BASE_URL}api/belege-elastic-search/`,
        href: "/edit/belege"
    },
    bedeutungen: {
        label: "Bedeutungen",
        api_url: `${API_BASE_URL}api/bedeutungen/`,
        href: "/edit/bedeutungen"
    },
    kontexte: {
        label: "Kontexte",
        api_url: `${API_BASE_URL}api/kontexte/`,
        href: "/edit/kontexte"
    },
    lautungen: {
        label: "Lautungen",
        api_url: `${API_BASE_URL}api/lautungen/`,
        href: "/edit/lautungen"
    }
}