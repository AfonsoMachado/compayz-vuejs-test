<template>
  <main class="swivel-card-wrapper">
    <div class="swivel-card" :class="cardPosition">
      <div class="swivel-card-content">
        <div
          class="swivel-card-content-back w-100 d-flex justify-content-between"
        >
          <div class="card-top w-100">
            <div class="card-band"></div>
          </div>
          <div class="card-mid d-flex w-100 justify-content-end">
            <div class="cvv">
              <span class="text-white font-weight-bold">CVV</span>
              <div
                class="
                  cvv-box
                  d-flex
                  flex-column
                  align-content-center
                  justify-content-center
                "
              >
                <span class="font-weight-bold">
                  {{ cvv }}
                </span>
              </div>
            </div>
          </div>
          <div class="card-bot w-100 d-flex justify-content-end">
            <img
              alt="Logo mastercadr"
              src="../assets/images/ic-mastercard.png"
              class="card-logo"
            />
          </div>
        </div>
        <div class="swivel-card-content-front d-flex justify-content-between">
          <div class="card-top d-flex w-100 justify-content-between">
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
          <div class="card-mid d-flex w-100">
            <span class="card-number text-left">{{ cardNumber }}</span>
          </div>
          <div class="card-bot d-flex justify-content-between w-100">
            <div class="card-holder d-flex flex-column text-left">
              <span class="font-weight-lighter">Titular do cartão</span>
              <span>{{ cardHolder }}</span>
            </div>
            <div class="expiration d-flex flex-column text-right">
              <span class="font-weight-lighter">Validade</span>
              <span>{{ cardExpiration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      default: '#### #### #### ####',
    },
    holder: {
      type: String,
      default: 'nome impresso',
    },
    expiration: {
      type: String,
      default: 'MM/AA',
    },
    cvv: {
      type: String,
      default: 'CVV',
    },
    cardPosition: {
      type: String,
      default: 'front',
    },
  },

  computed: {
    cardNumber() {
      return this.number === '' ? '#### #### #### ####' : this.number
    },
    cardExpiration() {
      return this.expiration === '' ? 'MM/AA' : this.expiration
    },
    cardHolder() {
      return this.holder === '' ? 'nome impresso' : this.holder
    },
  },
}
</script>

<style>
.swivel-card {
  background-color: transparent;
  width: 100%;
  height: 240px;
  perspective: 1000px;
  margin-bottom: 15px;
}

.swivel-card-content {
  border-radius: 20px;
  background: rgb(26, 27, 30);
  background: radial-gradient(
    circle,
    rgba(26, 27, 30, 1) 0%,
    rgba(92, 114, 233, 1) 79%
  );
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.cvv-box {
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 5px;
}

.card-band {
  background-color: #01021a;
  height: 50px;
  width: 100%;
}

.swivel-card.back .swivel-card-content {
  transform: rotateY(180deg);
}

.swivel-card-content-front,
.swivel-card-content-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
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
.expiration {
  font-size: 18px;
}

.card-holder span:nth-child(2) {
  text-transform: uppercase;
}

.card-logo {
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
}

.swivel-card-content-back {
  border: none;
  padding: 16px 0;
}

.swivel-card-content-back .card-mid,
.swivel-card-content-back .card-bot {
  padding-right: 20px;
}
</style>
