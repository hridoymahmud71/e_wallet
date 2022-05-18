class Helper {
    static get_basename = () => {
        if (
            window.app_settings.basename == "/" ||
            window.app_settings.basename == ""
        ) {
            return "/";
        }

        return window.app_settings.basename;
    };

    static static_path = (path) => {
        if (
            window.app_settings.basename == "/" ||
            window.app_settings.basename == ""
        ) {
            return path;
        }

        return `${window.app_settings.basename}/${path}`;
    };

    static path_with_app_url = (path) => {
        return `${window.app_settings.app_url}/${path}`;
    };

    static public_path = () => {
        return `${window.app_settings.app_url}/public`;
    };

    static path_with_public_url = (path) => {
        return `${window.app_settings.app_url}/public/${path}`;
    };

    static setLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static getFromLocalStorage(key, def = null) {
        return JSON.parse(localStorage.getItem(key)) ?? def;
    }

    static api_path() {
        return `${window.app_settings.api_path}`;
    }
}

export default Helper;
