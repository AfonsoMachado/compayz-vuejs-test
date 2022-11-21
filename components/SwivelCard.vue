<template>
  <main class="swivel-card-wrapper">
    <div class="swivel-card">
      <div class="swivel-card-content">
        <div class="swivel-card-content-back"></div>
        <div class="swivel-card-content-front">
          <div class="card-top d-flex justify-content-between w-100">
            <img
              alt="Chip cartão"
              src="../assets/images/ic-chip.png"
              class="card-chip"
            />
            <img
              alt="Logo mastercadr"
              src="../assets/images/ic-mastercard.png"
              class="card-logo"
            />
          </div>
          <div class="card-mid">
            <span class="card-number">#### #### #### ####</span>
          </div>
          <div class="card-bot d-flex justify-content-between w-100">
            <div class="card-holder d-flex flex-column text-left">
              <span>Titular do cartão</span>
              <span>afonso s machado</span>
            </div>
            <div class="validity d-flex flex-column text-right">
              <span>Validade</span>
              <span>MM/AA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style>
.swivel-card-wrapper {
  background-size: 100% center;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  place-items: center;
}

.swivel-card {
  background-color: transparent;
  width: 100%;
  height: 240px;
  perspective: 1000px;
  cursor: pointer;
  margin-bottom: 15px;
}

.swivel-card-content {
  border-radius: 20px;
  background-color: aquamarine;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.swivel-card:hover .swivel-card-content {
  transform: rotateY(180deg);
}

.swivel-card-content-front,
.swivel-card-content-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  /* Safari */
  backface-visibility: hidden;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.swivel-card-content-front,
.swivel-card-content-back {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.15), inset 0 0 32px -11px white;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.logo-mastercadr {
  width: 100px;
  height: auto;
  filter: drop-shadow(2px 2px 5px black);
}

.swivel-card-content-front .card-chip {
  width: 50px;
}

.card-number {
  font-size: 28px;
}

.card-holder,
.validity {
  font-size: 18px;
}

.card-holder span:nth-child(2) {
  text-transform: uppercase;
}

.swivel-card-content-front .card-logo {
  width: 50px;
  height: auto;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.4));
}

.swivel-card-content-back {
  transform: rotateY(180deg);
}

.swivel-card-content-front {
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
}
</style>
