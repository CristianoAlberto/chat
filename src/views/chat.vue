<template>
  <div>
    <div id="chat">
      <div id="messages">
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message ours">{{ data.name }}</span>
        <span class="message theirs">Falaaaaa txee wiiii😭😭</span>
        <span class="message theirs">calma vou te ligar</span>
        <span class="message ours">Wowoo😭😭🤣</span>
      </div>
      <div style="display: flex; padding: 20px;">
        <input type="text" id="newMessage" placeholder="Digite a sua mensagem" autocomplete="off">
        <button>Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []

    }
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      await this.axios.get('/user/')
        .then(response => {
          this.data = response.data.data.data[0]
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
    }
  }
  // https://api.github.com/
}
</script>

<style scoped>
html,
body {
  height: 100%;
  font-family: 'SF UI Text', 'San Francisco Text', Roboto, -apple-system, sans-serif;
}

#chat {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
}

#messages {
  background: #eee;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: auto;
  align-items: flex-start;
  padding: 20px;
}

.message {
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 16px;
  max-width: 70%;
}

.ours {
  background: #0076FF;
  align-self: flex-end;
  color: white;
}

.theirs {
  background: gray;
  color: white;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  width: calc(100% - 20px);
  margin: 10px;
}
</style>