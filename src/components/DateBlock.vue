<template>
    <div id="date">
        <div id="background"></div>
        <div id="nailbar">
            <div class="nail"></div>
            <div class="nail"></div>
        </div>
        <div id="content">
            <div class="text">{{ dayName }}</div>
            <div class="text">{{ day }} {{ monthName }} {{ year }}</div>
            <div class="text">{{ hour }}:{{ minute }}</div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

function pad(n) {
    return n < 10 ? "0" + n : n;
}

function capitel(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

/**
 * @param {String} string
 * @param {String} toremove
 * @returns {String}
 */
function stripEnd(string, toremove) {
    if (string === undefined) return undefined;
    while (string.length > 0 && toremove.includes(string.charAt(string.length - 1))) {
        string = string.slice(0, -1);
    }
    return string;
}

const localization = "nl-NL";

export default defineComponent({
    name: "DateBlock",
    props: {
        value: {
            type: String,
            default: null,
        },
    },
    computed: {
        /** @type {Date} */
        date() {
            return this.value === null ? null : new Date(this.value.toString());
        },
        year() {
            return this.date?.getFullYear();
        },
        month() {
            return pad(this.date?.getMonth() + 1);
        },
        day() {
            return this.date?.getDate();
        },
        hour() {
            return pad(this.date?.getHours());
        },
        minute() {
            return pad(this.date?.getMinutes());
        },
        monthName() {
            const options = { month: "short" };
            return stripEnd(this.date?.toLocaleDateString(localization, options).toString(), ".");
        },
        dayName() {
            const options = { weekday: "long" };
            return capitel(this.date?.toLocaleDateString(localization, options).toString());
        },
        text() {
            if (this.value === null) return null;

            const options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };

            const date = new Date(this.value.toString());
            const string = date.toLocaleDateString("nl-NL", options).toString();

            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
});
</script>

<style scoped>
@font-face {
    font-family: Montserrat;
    src: url(../css/fonts/Montserrat.ttf);
}

#nailbar {
    background-color: red;
    width: 100%;
    height: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 0;
}

.nail {
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 10px;
}

#content {
    display: flex;
    flex-direction: column;
    padding: 2px 1em;
}

#background {
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: -1;
    background-color: #fff;
    opacity: 0.8;
}

.text {
    text-align: center;
    width: 100%;
    font-family: "Montserrat";
}

#month-name,
#day-name {
    text-transform: uppercase;
    font-size: 0.8em;
}

#day {
    font-size: 1.2em;
    font-weight: bold;
}

#year {
    font-size: 0.6em;
}

#date {
    position: relative;

    display: flex;
    flex-direction: column;
}
</style>
