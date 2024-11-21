<template>
  <div class="tileGrid">
    <div
      v-for="country in countries"
      :key="country.alpha3Code"
      class="countryTile"
    >
      <router-link
        :to="{ name: 'country-detail', params: { country: country.name } }"
        class="linkTile"
      >
        <img
          :src="country.flag"
          :alt="'Flag of ' + country.name"
          class="flag"
          loading="lazy"
        />
        <div class="text">
          <h1>{{ country.name }}</h1>
          <p>
            <span>Population:</span> {{ country.population.toLocaleString() }}
          </p>
          <p><span>Region:</span> {{ country.region }}</p>
          <p><span>Capital:</span> {{ country.capital }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Country } from "@/types/country";

export default defineComponent({
  name: "CountryList",
  props: {
    countries: {
      type: Array as () => Country[],
      required: true,
    },
  },
});
</script>

<style scoped>
/* Add your existing styles here */
.highlight {
  background-color: yellow;
  font-weight: bold;
}
</style>

<style scoped>
.home {
  background-color: #f9f9f9;
}

.searchBar {
  padding: 35px 75px;
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

.searchContainer {
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  width: 500px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.searchIcon {
  font-size: 16px;
  color: #848484;
  padding-right: 30px;
}

.searchInput {
  border: none;
  font-size: 14px;
  padding: 10px;
  width: 420px;
}

.dropdownBtn {
  display: block;
  background: #fff;
  height: 50px;
  width: 160px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative; /* Required for ::after positioning */
}

.dropdownBtn::after {
  content: "^"; /* Using caret symbol */
  font-size: 14px;
  color: var(--text-color); /* Matches text color */
  transform: rotate(180deg); /* Rotates caret downward */
  position: absolute;
  right: 30px; /* Position on the right */
  top: 30%; /* Center vertically */
  transform-origin: center; /* Rotate from the center */
  pointer-events: none; /* Prevent interaction */
}

.dropdownItem {
  padding: 0px 30px;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  text-align: left;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}

.dropdownUL {
  padding-left: 0;
  text-align: left;
  background-color: #fff;
  margin-top: 3px;
  padding: 10px 0;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  border-radius: 3px;
  position: absolute;
  width: 220px;
  z-index: 10;
}

.dropdownUL li {
  list-style: none;
  line-height: 2;
  cursor: pointer;
}

.dropdownUL li label {
  cursor: pointer;
  padding: 0 26px;
  display: block;
  width: 148px;
}

.dropdownUL li:hover {
  background-color: #f9f9f9;
}

.dropdownInput {
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
}

input[type="radio"] {
  -webkit-appearance: radio;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #2b3845;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-bottom: 100px;
}

.sortControls {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 75px;
  max-width: 1400px;
  color: var(--text-color);
  margin: 0 auto;
}

.sortControls label {
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
}

.sortControls select {
  padding: 5px 10px;
  font-size: 14px;
  background-color: var(--border-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
}

.sortControls select:focus {
  outline: none;
  border-color: var(--focus-border-color);
}

.sortControls button {
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
  color: var(--button-text-color);
  background-color: var(--button-background-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s,
    color 0.3s;
}

.sortControls button:hover {
  background-color: var(--button-hover-background-color);
}

.sortControls button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--focus-border-color);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loaderFlex {
  display: flex;
  justify-content: center;
}

.tileGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px 50px 0;
  margin: 0 auto;
  max-width: 1450px;
}

.countryTile {
  display: inline-block;
  background-color: #fff;
  width: 300px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: pointer;
  text-align: left;
  margin: 0 25px 80px;
  text-decoration: none;
  color: inherit;
  -webkit-animation: fadein 1s;
  -moz-animation: fadein 1s;
  -ms-animation: fadein 1s;
  -o-animation: fadein 1s;
  animation: fadein 1s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-moz-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-ms-keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.linkTile {
  display: inline-block;
  width: 300px;
  height: 365px;
  text-decoration: none;
  color: inherit;
}

.flag {
  height: 180px;
  width: 300px;
  border-radius: 3px 3px 0 0;
}

.text {
  padding-left: 30px;
  padding-right: 20px;
}

.text h1 {
  font-size: 20px;
}

.text p span {
  font-weight: 600;
}

.text p {
  line-height: 1;
}

::placeholder {
  font-weight: 600;
}

.darkTheme,
.darkTheme .dropdownUL li:hover {
  background-color: #202c36;
}

.darkTheme .searchContainer,
.darkTheme .searchInput,
.darkTheme .dropdownBtn,
.darkTheme .dropdownUL,
.darkTheme .countryTile {
  background-color: #2b3845;
}

.darkTheme h1,
.darkTheme p,
.darkTheme .searchIcon,
.darkTheme .searchInput,
.darkTheme ::placeholder,
.darkTheme .dropdownBtn,
.darkTheme .sortControls,
.darkTheme .dropdownUL {
  color: #fff;
}

.darkTheme .loader {
  border: 16px solid #2b3845;
  border-top: 16px solid #f3f3f3;
}

@media (max-width: 875px) {
  .tileGrid {
    justify-content: center;
    padding-left: 50px;
  }

  .searchBar {
    flex-direction: column;
    padding: 25px 15px;
  }
  .sortControls {
    padding: 25px 15px;
  }

  .searchContainer {
    width: inherit;
  }

  .dropdownDiv {
    margin-top: 40px;
  }
}
</style>
