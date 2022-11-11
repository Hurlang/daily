<template>
  <div id="app">
    <div class="d-flex align-center justify-center row gap mt-3">
      <div class="item nav d-flex col mainBorder align-center justify-center lighter">
        <nav>
          <div>
            <router-link to="/">모든</router-link>
          </div>
          <div>
            <router-link to="/today">오늘</router-link>
          </div>
          <div>
            <router-link to="/important">중요</router-link>
          </div>
        </nav>
      </div>
      <div class="item main d-flex col mainBorder justify-center text-left">
        <router-view/>
      </div>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.nav {
  width: 20%;
  font-size: 32px;
  min-height: 80vh;
}
.main {
  width: 75%;
  min-height: 80vh;
}

.d-flex {
  display: flex;
}
.col {
  flex-direction: column;
}
.row {
  flex-direction: row;
}
.mainBorder {
  border: 2px solid black;
  border-radius: 0.5rem;
}
.align-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.lighter {
  font-weight: lighter;
}
.item {
  display: inline-block;
}
.gap {
  gap: 1rem;
}
.mt-3 {
  margin-top: 1.5rem;
}
.text-left {
  text-align: left;
}
.ps {
  padding-left: 3rem;
}
button {
  border: none;
  background: transparent;
}
.item_skin {
  margin: 16px 0px;
  padding: 16px;
  border-radius: 0.5rem;
  border: 1px solid black
}
.p {
  padding: 2rem 2rem 0 2rem;
}
.m {
  margin: 2rem;
}
.inner_p {
  padding: 2rem
}
.ms-1{
  padding: 0 0 0 1rem;
}
.invisible {
  display: none;
}
.updateBtn {
  background: #198754;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  border: 1px solid #198754;
}

.updateForms {
  background: #f0f9ff;

}
.justify-stretch{
  justify-content: stretch;
}
.align-stretch{
  align-items: stretch;
}
</style>
