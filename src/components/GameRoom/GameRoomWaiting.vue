<script lang="ts">
import { updateDoc } from "firebase/firestore";

import { defineComponent, type PropType } from "vue";
import { Player } from "@/firebase/entities/Player";
import type { GameRoom } from "@/firebase/entities/GameRoom";

export default defineComponent({
  data() {
    return {
      player: Player.loadLocal(),
    }
  },
  props: {
    gameRoom: {
      type: Object as PropType<GameRoom>,
      required: true
    }
  },
  methods: {
    async startGame() {
      await updateDoc(this.gameRoom.ref, {startTime: Date.now()})
    }
  }
})
</script>

<template>
  <button class="pseudo-button" v-if="gameRoom?.isOwner(player)" @click="startGame">Start game</button>
  <p v-else>Waiting for the owner to start the game...</p>
</template>
