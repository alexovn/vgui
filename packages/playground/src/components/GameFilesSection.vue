<script setup lang="ts">
import {
  UiGroupBox,
  UiPanel,
  UiProgress,
  UiTree,
} from '@alexovn/vgui-vue'

const nodes = [
  {
    id: 'hl2',
    label: 'Half-Life 2',
    children: [
      {
        id: 'archives',
        label: 'Archives',
        children: [
          { id: 'content', label: 'hl2_misc_dir.vpk' },
          { id: 'sounds', label: 'hl2_sound_misc_dir.vpk' },
          { id: 'dialogue', label: 'hl2_sound_vo_english_dir.vpk' },
        ],
      },
      {
        id: 'configuration',
        label: 'Configuration',
        children: [
          { id: 'config', label: 'cfg/config.cfg' },
        ],
      },
    ],
  },
]

const activity = [
  'Scanning Half-Life 2 archives…',
  'Checking game content: hl2_misc_dir.vpk…',
  'Checking game sounds: hl2_sound_misc_dir.vpk…',
  'Checking English dialogue: hl2_sound_vo_english_dir.vpk…',
  'Reading player configuration: cfg/config.cfg…',
  'Verification continuing · 65% complete…',
]
</script>

<template>
  <UiPanel
    id="containers"
    title="Game files"
  >
    <p class="my-2 text-sm text-vgui-muted">
      Inspect sample Half-Life 2 files and verification activity before your next session.
    </p>

    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <UiGroupBox
        class="min-w-0"
        legend="Installed files"
      >
        <UiTree
          :nodes="nodes"
          label="Half-Life 2 game files"
          :default-expanded="['hl2', 'archives', 'configuration']"
        />
      </UiGroupBox>

      <UiGroupBox
        class="min-w-0"
        legend="File verification"
      >
        <UiProgress
          :model-value="65"
          label="Sample file verification progress"
        />

        <p class="my-2 text-sm text-vgui-muted">
          65% · Verifying Half-Life 2 files (sample session)
        </p>

        <div
          class="vgui-native-scrollbar h-25 overflow-auto"
          role="region"
          aria-label="Sample file verification activity"
          tabindex="0"
        >
          <p
            v-for="(entry, index) in activity"
            :key="entry"
            class="my-2 text-xs text-vgui-muted"
          >
            [{{ index + 1 }}] {{ entry }}
          </p>
        </div>
      </UiGroupBox>
    </div>
  </UiPanel>
</template>
