window.__editorModules[6494] = function (t, e, s) {
      const i = {
        TEXT_TO_IMAGE: "text-to-image",
        IMAGE_TO_IMAGE: "image-to-image",
        INSTRUCT_TO_IMAGE: "instruct-to-image",
        TEXT_TO_VIDEO: "text-to-video",
        IMAGE_TO_VIDEO: "image-to-video",
        VIDEO_TO_VIDEO: "video-to-video",
        AUDIO_TO_VIDEO: "audio-to-video",
        TEXT_TO_AUDIO: "text-to-audio",
        TEXT_TO_MUSIC: "text-to-music",
        LIP_SYNC: "lip-sync",
        TRANSCRIPTION: "transcription",
        REMOVE_BACKGROUND: "remove-background",
        VIDEO_REMOVE_BACKGROUND: "video-remove-background",
        IMAGE_TO_LAYERED: "image-to-layered",
        INPAINTING: "inpainting",
        OUTPAINTING: "outpainting",
        UPSCALE: "upscale",
        TEXT_TO_VECTOR: "text-to-vector",
        IMAGE_TO_VECTOR: "image-to-vector",
        VIDEO_SUBTITLE: "video-subtitle",
        TEXT_TO_TEXT: "text-to-text"
      };
      const a = [...[{
        value: i.TEXT_TO_IMAGE,
        label: "Text to Image",
        group: "image",
        color: "image",
        badge: "Create Image"
      }, {
        value: i.IMAGE_TO_IMAGE,
        label: "Image to Image",
        group: "image",
        color: "image",
        badge: "Image Variation"
      }, {
        value: i.INSTRUCT_TO_IMAGE,
        label: "Instruct Edit",
        group: "image",
        color: "edit",
        badge: "Edit Image",
        route: "/image-instruct-editor/"
      }, {
        value: i.INPAINTING,
        label: "Inpaint",
        group: "image",
        color: "edit",
        badge: "Inpaint Image"
      }, {
        value: i.OUTPAINTING,
        label: "Outpaint",
        group: "image",
        color: "edit",
        badge: "Outpaint Image"
      }, {
        value: i.UPSCALE,
        label: "Upscale",
        group: "image",
        color: "image",
        badge: "Upscale Image"
      }, {
        value: i.REMOVE_BACKGROUND,
        label: "Remove Background",
        group: "image",
        color: "image",
        badge: "Cutout Image"
      }, {
        value: i.IMAGE_TO_LAYERED,
        label: "Image to Layered",
        group: "image",
        color: "image",
        badge: "Layered Image"
      }, {
        value: i.TEXT_TO_VECTOR,
        label: "Text to Vector",
        group: "image",
        color: "image",
        badge: "Create Vector"
      }, {
        value: i.IMAGE_TO_VECTOR,
        label: "Image to Vector",
        group: "image",
        color: "image",
        badge: "Vectorize Image"
      }, {
        value: i.TEXT_TO_VIDEO,
        label: "Text to Video",
        group: "video",
        color: "video",
        badge: "Create Video"
      }, {
        value: i.IMAGE_TO_VIDEO,
        label: "Image to Video",
        group: "video",
        color: "video",
        badge: "Image to Video"
      }, {
        value: i.VIDEO_TO_VIDEO,
        label: "Video to Video",
        group: "video",
        color: "video",
        badge: "Restyle Video"
      }, {
        value: i.AUDIO_TO_VIDEO,
        label: "Audio to Video",
        group: "video",
        color: "video",
        badge: "Audio to Video"
      }, {
        value: i.LIP_SYNC,
        label: "Lip Sync",
        group: "video",
        color: "video",
        badge: "Lip-sync Video"
      }, {
        value: i.VIDEO_SUBTITLE,
        label: "Video Subtitle",
        group: "video",
        color: "video",
        badge: "Subtitle Video"
      }, {
        value: i.VIDEO_REMOVE_BACKGROUND,
        label: "Remove Video Background",
        group: "video",
        color: "video",
        badge: "Cutout Video"
      }, {
        value: i.TEXT_TO_AUDIO,
        label: "Text to Speech",
        group: "audio",
        color: "audio",
        badge: "Create Speech"
      }, {
        value: i.TEXT_TO_MUSIC,
        label: "Text to Music",
        group: "audio",
        color: "audio",
        badge: "Create Music"
      }, {
        value: i.TRANSCRIPTION,
        label: "Transcription",
        group: "audio",
        color: "audio",
        badge: "Transcribe Audio"
      }, {
        value: i.TEXT_TO_TEXT,
        label: "Text to Text",
        group: "meta",
        color: "text",
        badge: "Generate Text"
      }], {
        value: "text-generation",
        label: "Text Generation",
        group: "meta",
        color: "text",
        badge: "Generate Text"
      }, {
        value: "instruct-image",
        label: "Instruct Edit (legacy)",
        group: "image",
        color: "edit",
        badge: "Edit Image",
        route: "/image-instruct-editor/",
        hidden: true
      }];
      (() => {
        const t = {};
        for (const e of a) {
          t[e.value] = e;
        }
      })();
      s.d(e, ["$8", 0, i]);
    }
