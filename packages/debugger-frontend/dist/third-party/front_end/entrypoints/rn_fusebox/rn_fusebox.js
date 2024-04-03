import"../shell/shell.js";import*as e from"../../core/common/common.js";import*as t from"../../core/root/root.js";import*as o from"../../ui/legacy/legacy.js";import*as i from"../../core/i18n/i18n.js";import*as n from"../../models/issues_manager/issues_manager.js";import*as a from"../../core/sdk/sdk.js";import*as r from"../../models/workspace/workspace.js";import*as s from"../../panels/network/forward/forward.js";import*as l from"../../core/host/host.js";import*as c from"../main/main.js";const g={toggleDeviceToolbar:"Toggle device toolbar",captureScreenshot:"Capture screenshot",captureFullSizeScreenshot:"Capture full size screenshot",captureNodeScreenshot:"Capture node screenshot",showMediaQueries:"Show media queries",device:"device",hideMediaQueries:"Hide media queries",showRulers:"Show rulers in the Device Mode toolbar",hideRulers:"Hide rulers in the Device Mode toolbar",showDeviceFrame:"Show device frame",hideDeviceFrame:"Hide device frame"},d=i.i18n.registerUIStrings("panels/emulation/emulation-meta.ts",g),u=i.i18n.getLazilyComputedLocalizedString.bind(void 0,d);let m;async function p(){return m||(m=await import("../../panels/emulation/emulation.js")),m}o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.MOBILE,actionId:"emulation.toggle-device-mode",toggleable:!0,loadActionDelegate:async()=>(await p()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:u(g.toggleDeviceToolbar),iconClass:"devices",bindings:[{platform:"windows,linux",shortcut:"Shift+Ctrl+M"},{platform:"mac",shortcut:"Shift+Meta+M"}]}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await p()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:u(g.captureScreenshot)}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-full-height-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await p()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:u(g.captureFullSizeScreenshot)}),o.ActionRegistration.registerActionExtension({actionId:"emulation.capture-node-screenshot",category:o.ActionRegistration.ActionCategory.SCREENSHOT,loadActionDelegate:async()=>(await p()).DeviceModeWrapper.ActionDelegate.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,title:u(g.captureNodeScreenshot)}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"showMediaQueryInspector",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:u(g.showMediaQueries)},{value:!1,title:u(g.hideMediaQueries)}],tags:[u(g.device)]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"emulation.showRulers",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:u(g.showRulers)},{value:!1,title:u(g.hideRulers)}],tags:[u(g.device)]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.MOBILE,settingName:"emulation.showDeviceOutline",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:u(g.showDeviceFrame)},{value:!1,title:u(g.hideDeviceFrame)}],tags:[u(g.device)]}),o.Toolbar.registerToolbarItem({actionId:"emulation.toggle-device-mode",condition:t.Runtime.ConditionName.CAN_DOCK,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_LEFT,order:1,showLabel:void 0,loadItem:void 0,separator:void 0}),e.AppProvider.registerAppProvider({loadAppProvider:async()=>(await p()).AdvancedApp.AdvancedAppProvider.instance(),condition:t.Runtime.ConditionName.CAN_DOCK,order:0}),o.ContextMenu.registerItem({location:o.ContextMenu.ItemLocation.DEVICE_MODE_MENU_SAVE,order:12,actionId:"emulation.capture-screenshot"}),o.ContextMenu.registerItem({location:o.ContextMenu.ItemLocation.DEVICE_MODE_MENU_SAVE,order:13,actionId:"emulation.capture-full-height-screenshot"});const w={sensors:"Sensors",geolocation:"geolocation",timezones:"timezones",locale:"locale",locales:"locales",accelerometer:"accelerometer",deviceOrientation:"device orientation",locations:"Locations",touch:"Touch",devicebased:"Device-based",forceEnabled:"Force enabled",emulateIdleDetectorState:"Emulate Idle Detector state",noIdleEmulation:"No idle emulation",userActiveScreenUnlocked:"User active, screen unlocked",userActiveScreenLocked:"User active, screen locked",userIdleScreenUnlocked:"User idle, screen unlocked",userIdleScreenLocked:"User idle, screen locked",showSensors:"Show Sensors",showLocations:"Show Locations"},S=i.i18n.registerUIStrings("panels/sensors/sensors-meta.ts",w),R=i.i18n.getLazilyComputedLocalizedString.bind(void 0,S);let y;async function A(){return y||(y=await import("../../panels/sensors/sensors.js")),y}o.ViewManager.registerViewExtension({location:"drawer-view",commandPrompt:R(w.showSensors),title:R(w.sensors),id:"sensors",persistence:"closeable",order:100,loadView:async()=>(await A()).SensorsView.SensorsView.instance(),tags:[R(w.geolocation),R(w.timezones),R(w.locale),R(w.locales),R(w.accelerometer),R(w.deviceOrientation)]}),o.ViewManager.registerViewExtension({location:"settings-view",id:"emulation-locations",commandPrompt:R(w.showLocations),title:R(w.locations),order:40,loadView:async()=>(await A()).LocationsSettingsTab.LocationsSettingsTab.instance(),settings:["emulation.locations"]}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"emulation.locations",settingType:e.Settings.SettingType.ARRAY,defaultValue:[{title:"Berlin",lat:52.520007,long:13.404954,timezoneId:"Europe/Berlin",locale:"de-DE"},{title:"London",lat:51.507351,long:-.127758,timezoneId:"Europe/London",locale:"en-GB"},{title:"Moscow",lat:55.755826,long:37.6173,timezoneId:"Europe/Moscow",locale:"ru-RU"},{title:"Mountain View",lat:37.386052,long:-122.083851,timezoneId:"America/Los_Angeles",locale:"en-US"},{title:"Mumbai",lat:19.075984,long:72.877656,timezoneId:"Asia/Kolkata",locale:"mr-IN"},{title:"San Francisco",lat:37.774929,long:-122.419416,timezoneId:"America/Los_Angeles",locale:"en-US"},{title:"Shanghai",lat:31.230416,long:121.473701,timezoneId:"Asia/Shanghai",locale:"zh-Hans-CN"},{title:"São Paulo",lat:-23.55052,long:-46.633309,timezoneId:"America/Sao_Paulo",locale:"pt-BR"},{title:"Tokyo",lat:35.689487,long:139.691706,timezoneId:"Asia/Tokyo",locale:"ja-JP"}]}),e.Settings.registerSettingExtension({title:R(w.touch),reloadRequired:!0,settingName:"emulation.touch",settingType:e.Settings.SettingType.ENUM,defaultValue:"none",options:[{value:"none",title:R(w.devicebased),text:R(w.devicebased)},{value:"force",title:R(w.forceEnabled),text:R(w.forceEnabled)}]}),e.Settings.registerSettingExtension({title:R(w.emulateIdleDetectorState),settingName:"emulation.idleDetection",settingType:e.Settings.SettingType.ENUM,defaultValue:"none",options:[{value:"none",title:R(w.noIdleEmulation),text:R(w.noIdleEmulation)},{value:'{"isUserActive":true,"isScreenUnlocked":true}',title:R(w.userActiveScreenUnlocked),text:R(w.userActiveScreenUnlocked)},{value:'{"isUserActive":true,"isScreenUnlocked":false}',title:R(w.userActiveScreenLocked),text:R(w.userActiveScreenLocked)},{value:'{"isUserActive":false,"isScreenUnlocked":true}',title:R(w.userIdleScreenUnlocked),text:R(w.userIdleScreenUnlocked)},{value:'{"isUserActive":false,"isScreenUnlocked":false}',title:R(w.userIdleScreenLocked),text:R(w.userIdleScreenLocked)}]});const h={developerResources:"Developer Resources",showDeveloperResources:"Show Developer Resources"},v=i.i18n.registerUIStrings("panels/developer_resources/developer_resources-meta.ts",h),T=i.i18n.getLazilyComputedLocalizedString.bind(void 0,v);let E;o.ViewManager.registerViewExtension({location:"drawer-view",id:"resource-loading-pane",title:T(h.developerResources),commandPrompt:T(h.showDeveloperResources),order:100,persistence:"closeable",experiment:t.Runtime.ExperimentName.DEVELOPER_RESOURCES_VIEW,loadView:async()=>new((await async function(){return E||(E=await import("../../panels/developer_resources/developer_resources.js")),E}()).DeveloperResourcesView.DeveloperResourcesView)});const N={rendering:"Rendering",showRendering:"Show Rendering",paint:"paint",layout:"layout",fps:"fps",cssMediaType:"CSS media type",cssMediaFeature:"CSS media feature",visionDeficiency:"vision deficiency",colorVisionDeficiency:"color vision deficiency",reloadPage:"Reload page",hardReloadPage:"Hard reload page",forceAdBlocking:"Force ad blocking on this site",blockAds:"Block ads on this site",showAds:"Show ads on this site, if allowed",autoOpenDevTools:"Auto-open DevTools for popups",doNotAutoOpen:"Do not auto-open DevTools for popups",disablePaused:"Disable paused state overlay",toggleCssPrefersColorSchemeMedia:"Toggle CSS media feature prefers-color-scheme"},f=i.i18n.registerUIStrings("entrypoints/inspector_main/inspector_main-meta.ts",N),k=i.i18n.getLazilyComputedLocalizedString.bind(void 0,f);let C;async function I(){return C||(C=await import("../inspector_main/inspector_main.js")),C}o.ViewManager.registerViewExtension({location:"drawer-view",id:"rendering",title:k(N.rendering),commandPrompt:k(N.showRendering),persistence:"closeable",order:50,loadView:async()=>(await I()).RenderingOptions.RenderingOptionsView.instance(),tags:[k(N.paint),k(N.layout),k(N.fps),k(N.cssMediaType),k(N.cssMediaFeature),k(N.visionDeficiency),k(N.colorVisionDeficiency)]}),o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.NAVIGATION,actionId:"inspector_main.reload",loadActionDelegate:async()=>(await I()).InspectorMain.ReloadActionDelegate.instance(),iconClass:"refresh",title:k(N.reloadPage),bindings:[{platform:"windows,linux",shortcut:"Ctrl+R"},{platform:"windows,linux",shortcut:"F5"},{platform:"mac",shortcut:"Meta+R"}]}),o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.NAVIGATION,actionId:"inspector_main.hard-reload",loadActionDelegate:async()=>(await I()).InspectorMain.ReloadActionDelegate.instance(),title:k(N.hardReloadPage),bindings:[{platform:"windows,linux",shortcut:"Shift+Ctrl+R"},{platform:"windows,linux",shortcut:"Shift+F5"},{platform:"windows,linux",shortcut:"Ctrl+F5"},{platform:"windows,linux",shortcut:"Ctrl+Shift+F5"},{platform:"mac",shortcut:"Shift+Meta+R"}]}),o.ActionRegistration.registerActionExtension({actionId:"rendering.toggle-prefers-color-scheme",category:o.ActionRegistration.ActionCategory.RENDERING,title:k(N.toggleCssPrefersColorSchemeMedia),loadActionDelegate:async()=>(await I()).RenderingOptions.ReloadActionDelegate.instance()}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,title:k(N.forceAdBlocking),settingName:"network.adBlockingEnabled",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,defaultValue:!1,options:[{value:!0,title:k(N.blockAds)},{value:!1,title:k(N.showAds)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.GLOBAL,storageType:e.Settings.SettingStorageType.Synced,title:k(N.autoOpenDevTools),settingName:"autoAttachToCreatedPages",settingType:e.Settings.SettingType.BOOLEAN,order:2,defaultValue:!1,options:[{value:!0,title:k(N.autoOpenDevTools)},{value:!1,title:k(N.doNotAutoOpen)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.APPEARANCE,storageType:e.Settings.SettingStorageType.Synced,title:k(N.disablePaused),settingName:"disablePausedStateOverlay",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1}),o.Toolbar.registerToolbarItem({loadItem:async()=>(await I()).InspectorMain.NodeIndicator.instance(),order:2,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_LEFT,showLabel:void 0,condition:void 0,separator:void 0,actionId:void 0}),o.Toolbar.registerToolbarItem({loadItem:async()=>(await I()).OutermostTargetSelector.OutermostTargetSelector.instance(),order:98,location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_RIGHT,showLabel:void 0,condition:void 0,separator:void 0,actionId:void 0,experiment:t.Runtime.ExperimentName.OUTERMOST_TARGET_SELECTOR});const b={issues:"Issues",showIssues:"Show Issues",cspViolations:"CSP Violations",showCspViolations:"Show CSP Violations"},P=i.i18n.registerUIStrings("panels/issues/issues-meta.ts",b),L=i.i18n.getLazilyComputedLocalizedString.bind(void 0,P);let x;async function D(){return x||(x=await import("../../panels/issues/issues.js")),x}o.ViewManager.registerViewExtension({location:"drawer-view",id:"issues-pane",title:L(b.issues),commandPrompt:L(b.showIssues),order:100,persistence:"closeable",loadView:async()=>(await D()).IssuesPane.IssuesPane.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"csp-violations-pane",title:L(b.cspViolations),commandPrompt:L(b.showCspViolations),order:100,persistence:"closeable",loadView:async()=>(await D()).CSPViolationsView.CSPViolationsView.instance(),experiment:t.Runtime.ExperimentName.CSP_VIOLATIONS_VIEW}),e.Revealer.registerRevealer({contextTypes:()=>[n.Issue.Issue],destination:e.Revealer.RevealerDestination.ISSUES_VIEW,loadRevealer:async()=>(await D()).IssueRevealer.IssueRevealer.instance()});const M={throttling:"Throttling",showThrottling:"Show Throttling",goOffline:"Go offline",device:"device",throttlingTag:"throttling",enableSlowGThrottling:"Enable slow `3G` throttling",enableFastGThrottling:"Enable fast `3G` throttling",goOnline:"Go online"},V=i.i18n.registerUIStrings("panels/mobile_throttling/mobile_throttling-meta.ts",M),O=i.i18n.getLazilyComputedLocalizedString.bind(void 0,V);let _;async function U(){return _||(_=await import("../../panels/mobile_throttling/mobile_throttling.js")),_}o.ViewManager.registerViewExtension({location:"settings-view",id:"throttling-conditions",title:O(M.throttling),commandPrompt:O(M.showThrottling),order:35,loadView:async()=>(await U()).ThrottlingSettingsTab.ThrottlingSettingsTab.instance(),settings:["customNetworkConditions"]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-offline",category:o.ActionRegistration.ActionCategory.NETWORK,title:O(M.goOffline),loadActionDelegate:async()=>(await U()).ThrottlingManager.ActionDelegate.instance(),tags:[O(M.device),O(M.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-low-end-mobile",category:o.ActionRegistration.ActionCategory.NETWORK,title:O(M.enableSlowGThrottling),loadActionDelegate:async()=>(await U()).ThrottlingManager.ActionDelegate.instance(),tags:[O(M.device),O(M.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-mid-tier-mobile",category:o.ActionRegistration.ActionCategory.NETWORK,title:O(M.enableFastGThrottling),loadActionDelegate:async()=>(await U()).ThrottlingManager.ActionDelegate.instance(),tags:[O(M.device),O(M.throttlingTag)]}),o.ActionRegistration.registerActionExtension({actionId:"network-conditions.network-online",category:o.ActionRegistration.ActionCategory.NETWORK,title:O(M.goOnline),loadActionDelegate:async()=>(await U()).ThrottlingManager.ActionDelegate.instance(),tags:[O(M.device),O(M.throttlingTag)]}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"customNetworkConditions",settingType:e.Settings.SettingType.ARRAY,defaultValue:[]});const F={showNetwork:"Show Network",network:"Network",showNetworkRequestBlocking:"Show Network request blocking",networkRequestBlocking:"Network request blocking",showNetworkConditions:"Show Network conditions",networkConditions:"Network conditions",diskCache:"disk cache",networkThrottling:"network throttling",showSearch:"Show Search",search:"Search",recordNetworkLog:"Record network log",stopRecordingNetworkLog:"Stop recording network log",hideRequestDetails:"Hide request details",colorcodeResourceTypes:"Color-code resource types",colorCode:"color code",resourceType:"resource type",colorCodeByResourceType:"Color code by resource type",useDefaultColors:"Use default colors",groupNetworkLogByFrame:"Group network log by frame",netWork:"network",frame:"frame",group:"group",groupNetworkLogItemsByFrame:"Group network log items by frame",dontGroupNetworkLogItemsByFrame:"Don't group network log items by frame",clear:"Clear network log"},B=i.i18n.registerUIStrings("panels/network/network-meta.ts",F),z=i.i18n.getLazilyComputedLocalizedString.bind(void 0,B);let W;async function K(){return W||(W=await import("../../panels/network/network.js")),W}function j(e){return void 0===W?[]:e(W)}o.ViewManager.registerViewExtension({location:"panel",id:"network",commandPrompt:z(F.showNetwork),title:z(F.network),order:40,condition:t.Runtime.ConditionName.REACT_NATIVE_UNSTABLE_NETWORK_PANEL,loadView:async()=>(await K()).NetworkPanel.NetworkPanel.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"network.blocked-urls",commandPrompt:z(F.showNetworkRequestBlocking),title:z(F.networkRequestBlocking),persistence:"closeable",order:60,loadView:async()=>(await K()).BlockedURLsPane.BlockedURLsPane.instance()}),o.ViewManager.registerViewExtension({location:"drawer-view",id:"network.config",commandPrompt:z(F.showNetworkConditions),title:z(F.networkConditions),persistence:"closeable",order:40,tags:[z(F.diskCache),z(F.networkThrottling),i.i18n.lockedLazyString("useragent"),i.i18n.lockedLazyString("user agent"),i.i18n.lockedLazyString("user-agent")],loadView:async()=>(await K()).NetworkConfigView.NetworkConfigView.instance()}),o.ViewManager.registerViewExtension({location:"network-sidebar",id:"network.search-network-tab",commandPrompt:z(F.showSearch),title:z(F.search),persistence:"permanent",loadView:async()=>(await K()).NetworkPanel.SearchNetworkView.instance()}),o.ActionRegistration.registerActionExtension({actionId:"network.toggle-recording",category:o.ActionRegistration.ActionCategory.NETWORK,iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>j((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await K()).NetworkPanel.ActionDelegate.instance(),options:[{value:!0,title:z(F.recordNetworkLog)},{value:!1,title:z(F.stopRecordingNetworkLog)}],bindings:[{shortcut:"Ctrl+E",platform:"windows,linux"},{shortcut:"Meta+E",platform:"mac"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.clear",category:o.ActionRegistration.ActionCategory.NETWORK,title:z(F.clear),iconClass:"clear",loadActionDelegate:async()=>(await K()).NetworkPanel.ActionDelegate.instance(),contextTypes:()=>j((e=>[e.NetworkPanel.NetworkPanel])),bindings:[{shortcut:"Ctrl+L"},{shortcut:"Meta+K",platform:"mac"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.hide-request-details",category:o.ActionRegistration.ActionCategory.NETWORK,title:z(F.hideRequestDetails),contextTypes:()=>j((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await K()).NetworkPanel.ActionDelegate.instance(),bindings:[{shortcut:"Esc"}]}),o.ActionRegistration.registerActionExtension({actionId:"network.search",category:o.ActionRegistration.ActionCategory.NETWORK,title:z(F.search),contextTypes:()=>j((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await K()).NetworkPanel.ActionDelegate.instance(),bindings:[{platform:"mac",shortcut:"Meta+F",keybindSets:["devToolsDefault","vsCode"]},{platform:"windows,linux",shortcut:"Ctrl+F",keybindSets:["devToolsDefault","vsCode"]}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,storageType:e.Settings.SettingStorageType.Synced,title:z(F.colorcodeResourceTypes),settingName:"networkColorCodeResourceTypes",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,tags:[z(F.colorCode),z(F.resourceType)],options:[{value:!0,title:z(F.colorCodeByResourceType)},{value:!1,title:z(F.useDefaultColors)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,storageType:e.Settings.SettingStorageType.Synced,title:z(F.groupNetworkLogByFrame),settingName:"network.group-by-frame",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,tags:[z(F.netWork),z(F.frame),z(F.group)],options:[{value:!0,title:z(F.groupNetworkLogItemsByFrame)},{value:!1,title:z(F.dontGroupNetworkLogItemsByFrame)}]}),o.ViewManager.registerLocationResolver({name:"network-sidebar",category:o.ViewManager.ViewLocationCategory.NETWORK,loadResolver:async()=>(await K()).NetworkPanel.NetworkPanel.instance()}),o.ContextMenu.registerProvider({contextTypes:()=>[a.NetworkRequest.NetworkRequest,a.Resource.Resource,r.UISourceCode.UISourceCode],loadProvider:async()=>(await K()).NetworkPanel.ContextMenuProvider.instance(),experiment:void 0}),e.Revealer.registerRevealer({contextTypes:()=>[a.NetworkRequest.NetworkRequest],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await K()).NetworkPanel.RequestRevealer.instance()}),e.Revealer.registerRevealer({contextTypes:()=>[s.UIRequestLocation.UIRequestLocation],loadRevealer:async()=>(await K()).NetworkPanel.RequestLocationRevealer.instance(),destination:void 0}),e.Revealer.registerRevealer({contextTypes:()=>[s.NetworkRequestId.NetworkRequestId],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await K()).NetworkPanel.RequestIdRevealer.instance()}),e.Revealer.registerRevealer({contextTypes:()=>[s.UIFilter.UIRequestFilter],destination:e.Revealer.RevealerDestination.NETWORK_PANEL,loadRevealer:async()=>(await K()).NetworkPanel.NetworkLogWithFilterRevealer.instance()});const q={profiler:"Profiler",showProfiler:"Show Profiler",performance:"Performance",showPerformance:"Show Performance",startStopRecording:"Start/stop recording",showRecentTimelineSessions:"Show recent timeline sessions",record:"Record",stop:"Stop",startProfilingAndReloadPage:"Start profiling and reload page"},G=i.i18n.registerUIStrings("panels/js_profiler/js_profiler-meta.ts",q),H=i.i18n.getLazilyComputedLocalizedString.bind(void 0,G);let J,Q;async function Y(){return Q||(Q=await import("../../panels/profiler/profiler.js")),Q}async function X(){return J||(J=await import("../../panels/timeline/timeline.js")),J}function Z(e){return void 0===J?[]:e(J)}o.ViewManager.registerViewExtension({location:"panel",id:"js_profiler",title:H(q.profiler),commandPrompt:H(q.showProfiler),order:65,persistence:"permanent",experiment:t.Runtime.ExperimentName.JS_PROFILER_TEMP_ENABLE,loadView:async()=>(await Y()).ProfilesPanel.JSProfilerPanel.instance()}),o.ActionRegistration.registerActionExtension({actionId:"profiler.js-toggle-recording",category:o.ActionRegistration.ActionCategory.JAVASCRIPT_PROFILER,title:H(q.startStopRecording),iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>void 0===Q?[]:(e=>[e.ProfilesPanel.JSProfilerPanel])(Q),loadActionDelegate:async()=>(await Y()).ProfilesPanel.JSProfilerPanel.instance(),bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.show-history",loadActionDelegate:async()=>(await X()).TimelinePanel.ActionDelegate.instance(),category:o.ActionRegistration.ActionCategory.PERFORMANCE,title:H(q.showRecentTimelineSessions),contextTypes:()=>Z((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Ctrl+H"},{platform:"mac",shortcut:"Meta+Y"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.toggle-recording",category:o.ActionRegistration.ActionCategory.PERFORMANCE,iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>Z((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>(await X()).TimelinePanel.ActionDelegate.instance(),options:[{value:!0,title:H(q.record)},{value:!1,title:H(q.stop)}],bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),o.ActionRegistration.registerActionExtension({actionId:"timeline.record-reload",iconClass:"refresh",contextTypes:()=>Z((e=>[e.TimelinePanel.TimelinePanel])),category:o.ActionRegistration.ActionCategory.PERFORMANCE,title:H(q.startProfilingAndReloadPage),loadActionDelegate:async()=>(await X()).TimelinePanel.ActionDelegate.instance(),bindings:[{platform:"windows,linux",shortcut:"Ctrl+Shift+E"},{platform:"mac",shortcut:"Meta+Shift+E"}]});const $={rnWelcome:"⚛️ Welcome",showRnWelcome:"Show React Native Welcome panel"},ee=i.i18n.registerUIStrings("panels/rn_welcome/rn_welcome-meta.ts",$),te=i.i18n.getLazilyComputedLocalizedString.bind(void 0,ee);let oe;o.ViewManager.registerViewExtension({location:"panel",id:"rn-welcome",title:te($.rnWelcome),commandPrompt:te($.showRnWelcome),order:-10,persistence:"permanent",loadView:async()=>(await async function(){return oe||(oe=await import("../../panels/rn_welcome/rn_welcome.js")),oe}()).RNWelcome.RNWelcomeImpl.instance(),experiment:t.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI}),l.RNPerfMetrics.registerPerfMetricsGlobalPostMessageHandler(),l.rnPerfMetrics.setLaunchId(t.Runtime.Runtime.queryParam("launchId")),l.rnPerfMetrics.entryPointLoadingStarted(),a.TargetManager.TargetManager.instance().addModelListener(a.DebuggerModel.DebuggerModel,a.DebuggerModel.Events.DebuggerIsReadyToPause,(()=>l.rnPerfMetrics.debuggerReadyToPause())),t.Runtime.experiments.register(t.Runtime.ExperimentName.JS_PROFILER_TEMP_ENABLE,"Enable JavaScript Profiler (legacy)",!1),t.Runtime.experiments.register(t.Runtime.ExperimentName.JS_HEAP_PROFILER_ENABLE,"Enable Heap Profiler",!1),t.Runtime.experiments.register(t.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI,"Show React Native-specific UI",!1,globalThis.reactNativeDocLink??"https://reactnative.dev/docs/debugging"),t.Runtime.experiments.register(t.Runtime.ExperimentName.ENABLE_REACT_DEVTOOLS_PANEL,"Enable React DevTools panel",!0),t.Runtime.experiments.enableExperimentsByDefault([t.Runtime.ExperimentName.REACT_NATIVE_SPECIFIC_UI]);class ie extends a.SDKModel.SDKModel{constructor(e){super(e),e.router()?.sendMessage(e.sessionId,"FuseboxClient","FuseboxClient.setClientMetadata",{},(()=>{}))}}a.SDKModel.SDKModel.register(ie,{capabilities:a.Target.Capability.None,autostart:!0,early:!0});const ne={networkTitle:"React Native",showReactNative:"Show React Native",sendFeedback:"[FB-only] Send feedback"},ae=i.i18n.registerUIStrings("entrypoints/rn_fusebox/rn_fusebox.ts",ne),re=i.i18n.getLazilyComputedLocalizedString.bind(void 0,ae);let se;if(o.ViewManager.registerViewExtension({location:"navigator-view",id:"navigator-network",title:re(ne.networkTitle),commandPrompt:re(ne.showReactNative),order:2,persistence:"permanent",loadView:async()=>(await async function(){return se||(se=await import("../../panels/sources/sources.js")),se}()).SourcesNavigator.NetworkNavigatorView.instance()}),self.runtime=t.Runtime.Runtime.instance({forceNew:!0}),new c.MainImpl.MainImpl,globalThis.FB_ONLY__reactNativeFeedbackLink){const e=globalThis.FB_ONLY__reactNativeFeedbackLink,t="react-native-send-feedback",i={handleAction:(o,i)=>i===t&&(l.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(e),!0)};o.ActionRegistration.registerActionExtension({category:o.ActionRegistration.ActionCategory.GLOBAL,actionId:t,title:re(ne.sendFeedback),loadActionDelegate:async()=>i,iconClass:"bug"}),o.Toolbar.registerToolbarItem({location:o.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_RIGHT,actionId:t,showLabel:!0})}
