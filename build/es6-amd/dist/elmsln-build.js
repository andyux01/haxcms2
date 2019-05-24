define(["../node_modules/@lrnwebcomponents/h-a-x/h-a-x.js","../node_modules/@lrnwebcomponents/cms-hax/cms-hax.js","../node_modules/@lrnwebcomponents/wysiwyg-hax/wysiwyg-hax.js","../node_modules/@lrnwebcomponents/lrn-page/lrn-page.js","../node_modules/@lrnwebcomponents/lrn-content/lrn-content.js","../node_modules/@lrnwebcomponents/elmsln-loading/elmsln-loading.js","../node_modules/@polymer/paper-menu-button/paper-menu-button.js","../node_modules/@polymer/paper-toast/paper-toast.js","../node_modules/@polymer/paper-tabs/paper-tabs.js","../node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js","../node_modules/@polymer/paper-input/paper-textarea.js","../node_modules/@polymer/paper-checkbox/paper-checkbox.js","../node_modules/@polymer/paper-button/paper-button.js","../node_modules/@polymer/paper-toggle-button/paper-toggle-button.js","../node_modules/@polymer/paper-input/paper-input.js","../node_modules/@polymer/paper-badge/paper-badge.js","../node_modules/@polymer/paper-slider/paper-slider.js","../node_modules/@polymer/paper-spinner/paper-spinner.js","../node_modules/@polymer/paper-listbox/paper-listbox.js","../node_modules/@polymer/paper-item/paper-item.js","../node_modules/@lrnwebcomponents/lrnsys-layout/lib/lrnsys-drawer.js","../node_modules/@lrnwebcomponents/lrnsys-layout/lib/lrnsys-collapselist.js","../node_modules/@lrnwebcomponents/lrnsys-layout/lib/lrnsys-dialog.js","../node_modules/@lrnwebcomponents/lrnsys-button/lrnsys-button.js","../node_modules/@lrnwebcomponents/lrndesign-drawer/lrndesign-drawer.js","../node_modules/@lrnwebcomponents/lrndesign-panelcard/lrndesign-panelcard.js","../node_modules/@lrnwebcomponents/lrndesign-blockquote/lrndesign-blockquote.js","../node_modules/@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","../node_modules/@lrnwebcomponents/lrndesign-abbreviation/lrndesign-abbreviation.js","../node_modules/@lrnwebcomponents/lrndesign-paperstack/lrndesign-paperstack.js","../node_modules/@lrnwebcomponents/lrnapp-fab-menu/lrnapp-fab-menu.js","../node_modules/@lrnwebcomponents/lrn-icons/lrn-icons.js","../node_modules/@lrnwebcomponents/lrn-icon/lrn-icon.js","../node_modules/@polymer/iron-icons/iron-icons.js","../node_modules/@polymer/iron-icons/av-icons.js","../node_modules/@polymer/iron-icons/communication-icons.js","../node_modules/@polymer/iron-icons/device-icons.js","../node_modules/@polymer/iron-icons/editor-icons.js","../node_modules/@polymer/iron-icons/hardware-icons.js","../node_modules/@polymer/iron-icons/image-icons.js","../node_modules/@polymer/iron-icons/maps-icons.js","../node_modules/@polymer/iron-icons/notification-icons.js","../node_modules/@polymer/iron-icons/social-icons.js","../node_modules/@polymer/iron-icons/places-icons.js","../node_modules/@lrnwebcomponents/dropdown-select/dropdown-select.js","../node_modules/@lrnwebcomponents/a11y-gif-player/a11y-gif-player.js","../node_modules/@lrnwebcomponents/citation-element/citation-element.js","../node_modules/@lrnwebcomponents/hero-banner/hero-banner.js","../node_modules/@lrnwebcomponents/image-compare-slider/image-compare-slider.js","../node_modules/@lrnwebcomponents/license-element/license-element.js","../node_modules/@lrnwebcomponents/lrn-aside/lrn-aside.js","../node_modules/@lrnwebcomponents/lrn-calendar/lrn-calendar.js","../node_modules/@lrnwebcomponents/lrn-math/lrn-math.js","../node_modules/@lrnwebcomponents/lrn-table/lrn-table.js","../node_modules/@lrnwebcomponents/lrn-vocab/lrn-vocab.js","../node_modules/@lrnwebcomponents/md-block/md-block.js","../node_modules/@lrnwebcomponents/magazine-cover/magazine-cover.js","../node_modules/@lrnwebcomponents/media-behaviors/media-behaviors.js","../node_modules/@lrnwebcomponents/media-image/media-image.js","../node_modules/@lrnwebcomponents/meme-maker/meme-maker.js","../node_modules/@lrnwebcomponents/multiple-choice/multiple-choice.js","../node_modules/@lrnwebcomponents/paper-audio-player/paper-audio-player.js","../node_modules/@lrnwebcomponents/person-testimonial/person-testimonial.js","../node_modules/@lrnwebcomponents/place-holder/place-holder.js","../node_modules/@lrnwebcomponents/q-r/q-r.js","../node_modules/@lrnwebcomponents/full-width-image/full-width-image.js","../node_modules/@lrnwebcomponents/self-check/self-check.js","../node_modules/@lrnwebcomponents/simple-concept-network/simple-concept-network.js","../node_modules/@lrnwebcomponents/stop-note/stop-note.js","../node_modules/@lrnwebcomponents/tab-list/tab-list.js","../node_modules/@lrnwebcomponents/task-list/task-list.js","../node_modules/@lrnwebcomponents/video-player/video-player.js","../node_modules/@lrnwebcomponents/wave-player/wave-player.js","../node_modules/@lrnwebcomponents/wikipedia-query/wikipedia-query.js"],function(_hAX,_cmsHax,_wysiwygHax,_lrnPage,_lrnContent,_elmslnLoading,_paperMenuButton,_paperToast,_paperTabs,_paperDialogScrollable,_paperTextarea,_paperCheckbox,_paperButton,_paperToggleButton,_paperInput,_paperBadge,_paperSlider,_paperSpinner,_paperListbox,_paperItem,_lrnsysDrawer,_lrnsysCollapselist,_lrnsysDialog,_lrnsysButton,_lrndesignDrawer,_lrndesignPanelcard,_lrndesignBlockquote,_lrndesignAvatar,_lrndesignAbbreviation,_lrndesignPaperstack,_lrnappFabMenu,_lrnIcons,_lrnIcon,_ironIcons,_avIcons,_communicationIcons,_deviceIcons,_editorIcons,_hardwareIcons,_imageIcons,_mapsIcons,_notificationIcons,_socialIcons,_placesIcons,_dropdownSelect,_a11yGifPlayer,_citationElement,_heroBanner,_imageCompareSlider,_licenseElement,_lrnAside,_lrnCalendar,_lrnMath,_lrnTable,_lrnVocab,_mdBlock,_magazineCover,_mediaBehaviors,_mediaImage,_memeMaker,_multipleChoice,_paperAudioPlayer,_personTestimonial,_placeHolder,_qR,_fullWidthImage,_selfCheck,_simpleConceptNetwork,_stopNote,_tabList,_taskList,_videoPlayer,_wavePlayer,_wikipediaQuery){});