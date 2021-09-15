const storage = new WeakMap();

import TraditionalLogo from "../../public/beer-traditional.svg";
import MysteryLogo from "../../public/beer-mystery.svg";
import MultiLogo from "../../public/beer-multi.svg";

class Stash {
    constructor(options) {
        storage.set(this, options);
    }

    get code() {
        const { code } = storage.get(this);

        return code;
    }

    get title() {
        const { title } = storage.get(this);

        return title;
    }

    get description() {
        const { description } = storage.get(this);

        return description;
    }

    get coordinates() {
        const { coordinates } = storage.get(this);

        return coordinates;
    }

    get location() {
        const { location } = storage.get(this);

        return location;
    }

    get type() {
        const { type } = storage.get(this);

        return type;
    }

    get hint() {
        const { hint } = storage.get(this);

        return hint;
    }

    get logs() {
        const { logs } = storage.get(this);

        return logs;
    }

    get icon() {
        switch(this.type) {
            case 'mystery':
                return MysteryLogo;

            case 'multi':
                return MultiLogo;

            case 'traditional':
            default:
                return TraditionalLogo;
        }
    }

    get creator() {
        const { creator } = storage.get(this);

        return creator;
    }

    get created() {
        const { _created_on } = storage.get(this);

        return _created_on;
    }

    static from(potential) {
        return potential instanceof this ? potential : new this(potential);
    }

    toJSON() {
        return storage.get(this);
    }
}

export default Stash;