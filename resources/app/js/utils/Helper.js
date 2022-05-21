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
        let loc_data = localStorage.getItem(key);

        if (loc_data === "undefined" || typeof loc_data === "undefined") {
            return def;
        }

        if (loc_data == null) {
            return def;
        }

        loc_data = loc_data.trim();
        return JSON.parse(loc_data) ?? def;
    }

    static api_path() {
        return `${window.app_settings.api_path}`;
    }
}

export default Helper;
