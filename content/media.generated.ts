// GENERATED FILE - do not edit by hand.
// Run: python3 scripts/convert-photos.py && node scripts/build-manifest.mjs
// Human-written titles live in content/series-titles.ts.

export type Part = "lake" | "astana";

export type Frame = {
  id: string;
  src: string;
  width: number;
  height: number;
  takenAt: string | null;
  downloadName: string;
};

export type Series = {
  id: string;
  part: Part;
  kind: "series" | "single";
  /** Кадры из мессенджера: EXIF вырезан, времени съёмки нет. */
  undated: boolean;
  date: string;
  time: string;
  takenAt: string;
  day: string;
  partOfDay: string;
  count: number;
  frames: Frame[];
};

export type VideoClip = {
  id: string;
  src: string;
  poster: string | null;
  width: number;
  height: number;
  duration: number;
  part: Part;
  date: string;
  time: string;
  takenAt: string;
  day: string;
  partOfDay: string;
  downloadName: string;
};

export const series: Series[] = [
  {
    "id": "s-IMG_2493",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-04",
    "time": "13:40",
    "takenAt": "2026-08-04T13:40:44",
    "day": "2026-08-04",
    "partOfDay": "День",
    "count": 3,
    "frames": [
      {
        "id": "IMG_2493",
        "src": "/media/photos/IMG_2493.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-04T13:40:44",
        "downloadName": "balkhash_2026-08-04_1340_IMG_2493.jpg"
      },
      {
        "id": "IMG_2494",
        "src": "/media/photos/IMG_2494.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-04T13:40:46",
        "downloadName": "balkhash_2026-08-04_1340_IMG_2494.jpg"
      },
      {
        "id": "IMG_2495",
        "src": "/media/photos/IMG_2495.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-04T13:40:46",
        "downloadName": "balkhash_2026-08-04_1340_IMG_2495.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2500",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-04",
    "time": "17:28",
    "takenAt": "2026-08-04T17:28:15",
    "day": "2026-08-04",
    "partOfDay": "Вечер",
    "count": 4,
    "frames": [
      {
        "id": "IMG_2500",
        "src": "/media/photos/IMG_2500.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-04T17:28:15",
        "downloadName": "balkhash_2026-08-04_1728_IMG_2500.jpg"
      },
      {
        "id": "IMG_2501",
        "src": "/media/photos/IMG_2501.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-04T17:28:16",
        "downloadName": "balkhash_2026-08-04_1728_IMG_2501.jpg"
      },
      {
        "id": "IMG_2502",
        "src": "/media/photos/IMG_2502.jpg",
        "width": 2560,
        "height": 1920,
        "takenAt": "2026-08-04T17:28:24",
        "downloadName": "balkhash_2026-08-04_1728_IMG_2502.jpg"
      },
      {
        "id": "IMG_2503",
        "src": "/media/photos/IMG_2503.jpg",
        "width": 2560,
        "height": 1920,
        "takenAt": "2026-08-04T17:28:27",
        "downloadName": "balkhash_2026-08-04_1728_IMG_2503.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2509",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-05",
    "time": "16:28",
    "takenAt": "2026-08-05T16:28:19",
    "day": "2026-08-05",
    "partOfDay": "День",
    "count": 4,
    "frames": [
      {
        "id": "IMG_2509",
        "src": "/media/photos/IMG_2509.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-05T16:28:19",
        "downloadName": "balkhash_2026-08-05_1628_IMG_2509.jpg"
      },
      {
        "id": "IMG_2510",
        "src": "/media/photos/IMG_2510.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-05T16:28:22",
        "downloadName": "balkhash_2026-08-05_1628_IMG_2510.jpg"
      },
      {
        "id": "IMG_2511",
        "src": "/media/photos/IMG_2511.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-05T16:28:25",
        "downloadName": "balkhash_2026-08-05_1628_IMG_2511.jpg"
      },
      {
        "id": "IMG_2512",
        "src": "/media/photos/IMG_2512.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-05T16:28:35",
        "downloadName": "balkhash_2026-08-05_1628_IMG_2512.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2530",
    "part": "lake",
    "kind": "single",
    "undated": false,
    "date": "2026-08-06",
    "time": "15:55",
    "takenAt": "2026-08-06T15:55:59",
    "day": "2026-08-06",
    "partOfDay": "День",
    "count": 1,
    "frames": [
      {
        "id": "IMG_2530",
        "src": "/media/photos/IMG_2530.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-06T15:55:59",
        "downloadName": "balkhash_2026-08-06_1555_IMG_2530.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2537",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-06",
    "time": "16:31",
    "takenAt": "2026-08-06T16:31:04",
    "day": "2026-08-06",
    "partOfDay": "День",
    "count": 2,
    "frames": [
      {
        "id": "IMG_2537",
        "src": "/media/photos/IMG_2537.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-06T16:31:04",
        "downloadName": "balkhash_2026-08-06_1631_IMG_2537.jpg"
      },
      {
        "id": "IMG_2538",
        "src": "/media/photos/IMG_2538.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-06T16:31:09",
        "downloadName": "balkhash_2026-08-06_1631_IMG_2538.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2545",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-06",
    "time": "22:14",
    "takenAt": "2026-08-06T22:14:26",
    "day": "2026-08-06",
    "partOfDay": "Ночь",
    "count": 3,
    "frames": [
      {
        "id": "IMG_2545",
        "src": "/media/photos/IMG_2545.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-06T22:14:26",
        "downloadName": "balkhash_2026-08-06_2214_IMG_2545.jpg"
      },
      {
        "id": "IMG_2546",
        "src": "/media/photos/IMG_2546.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-06T22:15:21",
        "downloadName": "balkhash_2026-08-06_2215_IMG_2546.jpg"
      },
      {
        "id": "IMG_2547",
        "src": "/media/photos/IMG_2547.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-06T22:16:04",
        "downloadName": "balkhash_2026-08-06_2216_IMG_2547.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2560",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-07",
    "time": "12:06",
    "takenAt": "2026-08-07T12:06:03",
    "day": "2026-08-07",
    "partOfDay": "День",
    "count": 23,
    "frames": [
      {
        "id": "IMG_2560",
        "src": "/media/photos/IMG_2560.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:06:03",
        "downloadName": "balkhash_2026-08-07_1206_IMG_2560.jpg"
      },
      {
        "id": "IMG_2561",
        "src": "/media/photos/IMG_2561.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:06:08",
        "downloadName": "balkhash_2026-08-07_1206_IMG_2561.jpg"
      },
      {
        "id": "IMG_2564",
        "src": "/media/photos/IMG_2564.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:07:30",
        "downloadName": "balkhash_2026-08-07_1207_IMG_2564.jpg"
      },
      {
        "id": "IMG_2565",
        "src": "/media/photos/IMG_2565.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:07:38",
        "downloadName": "balkhash_2026-08-07_1207_IMG_2565.jpg"
      },
      {
        "id": "IMG_2566",
        "src": "/media/photos/IMG_2566.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:07:41",
        "downloadName": "balkhash_2026-08-07_1207_IMG_2566.jpg"
      },
      {
        "id": "IMG_2567",
        "src": "/media/photos/IMG_2567.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:07:45",
        "downloadName": "balkhash_2026-08-07_1207_IMG_2567.jpg"
      },
      {
        "id": "IMG_2568",
        "src": "/media/photos/IMG_2568.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:07:48",
        "downloadName": "balkhash_2026-08-07_1207_IMG_2568.jpg"
      },
      {
        "id": "IMG_2569",
        "src": "/media/photos/IMG_2569.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:07:52",
        "downloadName": "balkhash_2026-08-07_1207_IMG_2569.jpg"
      },
      {
        "id": "IMG_2571",
        "src": "/media/photos/IMG_2571.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:21",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2571.jpg"
      },
      {
        "id": "IMG_2573",
        "src": "/media/photos/IMG_2573.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:24",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2573.jpg"
      },
      {
        "id": "IMG_2574",
        "src": "/media/photos/IMG_2574.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:26",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2574.jpg"
      },
      {
        "id": "IMG_2575",
        "src": "/media/photos/IMG_2575.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:29",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2575.jpg"
      },
      {
        "id": "IMG_2576",
        "src": "/media/photos/IMG_2576.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:31",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2576.jpg"
      },
      {
        "id": "IMG_2577",
        "src": "/media/photos/IMG_2577.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:32",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2577.jpg"
      },
      {
        "id": "IMG_2579",
        "src": "/media/photos/IMG_2579.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:37",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2579.jpg"
      },
      {
        "id": "IMG_2581",
        "src": "/media/photos/IMG_2581.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:55",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2581.jpg"
      },
      {
        "id": "IMG_2582",
        "src": "/media/photos/IMG_2582.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:08:57",
        "downloadName": "balkhash_2026-08-07_1208_IMG_2582.jpg"
      },
      {
        "id": "IMG_2584",
        "src": "/media/photos/IMG_2584.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:09:04",
        "downloadName": "balkhash_2026-08-07_1209_IMG_2584.jpg"
      },
      {
        "id": "IMG_2586",
        "src": "/media/photos/IMG_2586.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:09:11",
        "downloadName": "balkhash_2026-08-07_1209_IMG_2586.jpg"
      },
      {
        "id": "IMG_2587",
        "src": "/media/photos/IMG_2587.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:09:12",
        "downloadName": "balkhash_2026-08-07_1209_IMG_2587.jpg"
      },
      {
        "id": "IMG_2591",
        "src": "/media/photos/IMG_2591.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:09:32",
        "downloadName": "balkhash_2026-08-07_1209_IMG_2591.jpg"
      },
      {
        "id": "IMG_2593",
        "src": "/media/photos/IMG_2593.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:09:36",
        "downloadName": "balkhash_2026-08-07_1209_IMG_2593.jpg"
      },
      {
        "id": "IMG_2594",
        "src": "/media/photos/IMG_2594.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T12:09:41",
        "downloadName": "balkhash_2026-08-07_1209_IMG_2594.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2610",
    "part": "lake",
    "kind": "single",
    "undated": false,
    "date": "2026-08-07",
    "time": "18:00",
    "takenAt": "2026-08-07T18:00:01",
    "day": "2026-08-07",
    "partOfDay": "Вечер",
    "count": 1,
    "frames": [
      {
        "id": "IMG_2610",
        "src": "/media/photos/IMG_2610.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-07T18:00:01",
        "downloadName": "balkhash_2026-08-07_1800_IMG_2610.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2611",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-07",
    "time": "19:37",
    "takenAt": "2026-08-07T19:37:00",
    "day": "2026-08-07",
    "partOfDay": "Вечер",
    "count": 2,
    "frames": [
      {
        "id": "IMG_2611",
        "src": "/media/photos/IMG_2611.jpg",
        "width": 2560,
        "height": 1920,
        "takenAt": "2026-08-07T19:37:00",
        "downloadName": "balkhash_2026-08-07_1937_IMG_2611.jpg"
      },
      {
        "id": "IMG_2612",
        "src": "/media/photos/IMG_2612.jpg",
        "width": 2560,
        "height": 1920,
        "takenAt": "2026-08-07T19:37:07",
        "downloadName": "balkhash_2026-08-07_1937_IMG_2612.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2613",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-08",
    "time": "11:46",
    "takenAt": "2026-08-08T11:46:51",
    "day": "2026-08-08",
    "partOfDay": "День",
    "count": 2,
    "frames": [
      {
        "id": "IMG_2613",
        "src": "/media/photos/IMG_2613.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:46:51",
        "downloadName": "balkhash_2026-08-08_1146_IMG_2613.jpg"
      },
      {
        "id": "IMG_2614",
        "src": "/media/photos/IMG_2614.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:46:52",
        "downloadName": "balkhash_2026-08-08_1146_IMG_2614.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2621",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-08",
    "time": "11:51",
    "takenAt": "2026-08-08T11:51:48",
    "day": "2026-08-08",
    "partOfDay": "День",
    "count": 9,
    "frames": [
      {
        "id": "IMG_2621",
        "src": "/media/photos/IMG_2621.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:51:48",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2621.jpg"
      },
      {
        "id": "IMG_2622",
        "src": "/media/photos/IMG_2622.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:51:50",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2622.jpg"
      },
      {
        "id": "IMG_2623",
        "src": "/media/photos/IMG_2623.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:51:52",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2623.jpg"
      },
      {
        "id": "IMG_2624",
        "src": "/media/photos/IMG_2624.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:51:53",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2624.jpg"
      },
      {
        "id": "IMG_2625",
        "src": "/media/photos/IMG_2625.jpg",
        "width": 284,
        "height": 403,
        "takenAt": "2026-08-08T11:51:54",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2625.jpg"
      },
      {
        "id": "IMG_2626",
        "src": "/media/photos/IMG_2626.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:51:55",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2626.jpg"
      },
      {
        "id": "IMG_2627",
        "src": "/media/photos/IMG_2627.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:51:56",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2627.jpg"
      },
      {
        "id": "IMG_2628",
        "src": "/media/photos/IMG_2628.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:51:58",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2628.jpg"
      },
      {
        "id": "IMG_2629",
        "src": "/media/photos/IMG_2629.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:51:59",
        "downloadName": "balkhash_2026-08-08_1151_IMG_2629.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2630",
    "part": "lake",
    "kind": "series",
    "undated": false,
    "date": "2026-08-08",
    "time": "11:54",
    "takenAt": "2026-08-08T11:54:38",
    "day": "2026-08-08",
    "partOfDay": "День",
    "count": 2,
    "frames": [
      {
        "id": "IMG_2630",
        "src": "/media/photos/IMG_2630.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:54:38",
        "downloadName": "balkhash_2026-08-08_1154_IMG_2630.jpg"
      },
      {
        "id": "IMG_2631",
        "src": "/media/photos/IMG_2631.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T11:54:40",
        "downloadName": "balkhash_2026-08-08_1154_IMG_2631.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2640",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-08",
    "time": "18:52",
    "takenAt": "2026-08-08T18:52:11",
    "day": "2026-08-08",
    "partOfDay": "Вечер",
    "count": 7,
    "frames": [
      {
        "id": "IMG_2640",
        "src": "/media/photos/IMG_2640.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:52:11",
        "downloadName": "balkhash_2026-08-08_1852_IMG_2640.jpg"
      },
      {
        "id": "IMG_2641",
        "src": "/media/photos/IMG_2641.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:52:15",
        "downloadName": "balkhash_2026-08-08_1852_IMG_2641.jpg"
      },
      {
        "id": "IMG_2642",
        "src": "/media/photos/IMG_2642.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:52:15",
        "downloadName": "balkhash_2026-08-08_1852_IMG_2642.jpg"
      },
      {
        "id": "IMG_2643",
        "src": "/media/photos/IMG_2643.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:52:16",
        "downloadName": "balkhash_2026-08-08_1852_IMG_2643.jpg"
      },
      {
        "id": "IMG_2646",
        "src": "/media/photos/IMG_2646.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:52:48",
        "downloadName": "balkhash_2026-08-08_1852_IMG_2646.jpg"
      },
      {
        "id": "IMG_2647",
        "src": "/media/photos/IMG_2647.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:52:52",
        "downloadName": "balkhash_2026-08-08_1852_IMG_2647.jpg"
      },
      {
        "id": "IMG_2648",
        "src": "/media/photos/IMG_2648.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:52:53",
        "downloadName": "balkhash_2026-08-08_1852_IMG_2648.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2649",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-08",
    "time": "18:53",
    "takenAt": "2026-08-08T18:53:15",
    "day": "2026-08-08",
    "partOfDay": "Вечер",
    "count": 11,
    "frames": [
      {
        "id": "IMG_2649",
        "src": "/media/photos/IMG_2649.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:53:15",
        "downloadName": "balkhash_2026-08-08_1853_IMG_2649.jpg"
      },
      {
        "id": "IMG_2650",
        "src": "/media/photos/IMG_2650.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:53:27",
        "downloadName": "balkhash_2026-08-08_1853_IMG_2650.jpg"
      },
      {
        "id": "IMG_2653",
        "src": "/media/photos/IMG_2653.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:53:33",
        "downloadName": "balkhash_2026-08-08_1853_IMG_2653.jpg"
      },
      {
        "id": "IMG_2654",
        "src": "/media/photos/IMG_2654.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:53:42",
        "downloadName": "balkhash_2026-08-08_1853_IMG_2654.jpg"
      },
      {
        "id": "IMG_2657",
        "src": "/media/photos/IMG_2657.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:53:46",
        "downloadName": "balkhash_2026-08-08_1853_IMG_2657.jpg"
      },
      {
        "id": "IMG_2659",
        "src": "/media/photos/IMG_2659.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:53:51",
        "downloadName": "balkhash_2026-08-08_1853_IMG_2659.jpg"
      },
      {
        "id": "IMG_2660",
        "src": "/media/photos/IMG_2660.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:53:52",
        "downloadName": "balkhash_2026-08-08_1853_IMG_2660.jpg"
      },
      {
        "id": "IMG_2661",
        "src": "/media/photos/IMG_2661.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:53:57",
        "downloadName": "balkhash_2026-08-08_1853_IMG_2661.jpg"
      },
      {
        "id": "IMG_2662",
        "src": "/media/photos/IMG_2662.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:54:01",
        "downloadName": "balkhash_2026-08-08_1854_IMG_2662.jpg"
      },
      {
        "id": "IMG_2663",
        "src": "/media/photos/IMG_2663.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:54:02",
        "downloadName": "balkhash_2026-08-08_1854_IMG_2663.jpg"
      },
      {
        "id": "IMG_2666",
        "src": "/media/photos/IMG_2666.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T18:54:04",
        "downloadName": "balkhash_2026-08-08_1854_IMG_2666.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2668",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-08",
    "time": "22:10",
    "takenAt": "2026-08-08T22:10:01",
    "day": "2026-08-08",
    "partOfDay": "Ночь",
    "count": 2,
    "frames": [
      {
        "id": "IMG_2668",
        "src": "/media/photos/IMG_2668.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T22:10:01",
        "downloadName": "balkhash_2026-08-08_2210_IMG_2668.jpg"
      },
      {
        "id": "IMG_2669",
        "src": "/media/photos/IMG_2669.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-08T22:10:02",
        "downloadName": "balkhash_2026-08-08_2210_IMG_2669.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2674",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "12:47",
    "takenAt": "2026-08-09T12:47:38",
    "day": "2026-08-09",
    "partOfDay": "День",
    "count": 3,
    "frames": [
      {
        "id": "IMG_2674",
        "src": "/media/photos/IMG_2674.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T12:47:38",
        "downloadName": "balkhash_2026-08-09_1247_IMG_2674.jpg"
      },
      {
        "id": "IMG_2675",
        "src": "/media/photos/IMG_2675.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T12:47:41",
        "downloadName": "balkhash_2026-08-09_1247_IMG_2675.jpg"
      },
      {
        "id": "IMG_2676",
        "src": "/media/photos/IMG_2676.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T12:47:42",
        "downloadName": "balkhash_2026-08-09_1247_IMG_2676.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2677",
    "part": "astana",
    "kind": "single",
    "undated": false,
    "date": "2026-08-09",
    "time": "13:04",
    "takenAt": "2026-08-09T13:04:32",
    "day": "2026-08-09",
    "partOfDay": "День",
    "count": 1,
    "frames": [
      {
        "id": "IMG_2677",
        "src": "/media/photos/IMG_2677.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T13:04:32",
        "downloadName": "balkhash_2026-08-09_1304_IMG_2677.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2701",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "13:44",
    "takenAt": "2026-08-09T13:44:24",
    "day": "2026-08-09",
    "partOfDay": "День",
    "count": 6,
    "frames": [
      {
        "id": "IMG_2701",
        "src": "/media/photos/IMG_2701.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T13:44:24",
        "downloadName": "balkhash_2026-08-09_1344_IMG_2701.jpg"
      },
      {
        "id": "IMG_2702",
        "src": "/media/photos/IMG_2702.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T13:44:25",
        "downloadName": "balkhash_2026-08-09_1344_IMG_2702.jpg"
      },
      {
        "id": "IMG_2703",
        "src": "/media/photos/IMG_2703.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T13:44:26",
        "downloadName": "balkhash_2026-08-09_1344_IMG_2703.jpg"
      },
      {
        "id": "IMG_2704",
        "src": "/media/photos/IMG_2704.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T13:44:27",
        "downloadName": "balkhash_2026-08-09_1344_IMG_2704.jpg"
      },
      {
        "id": "IMG_2705",
        "src": "/media/photos/IMG_2705.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T13:44:28",
        "downloadName": "balkhash_2026-08-09_1344_IMG_2705.jpg"
      },
      {
        "id": "IMG_2706",
        "src": "/media/photos/IMG_2706.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T13:44:30",
        "downloadName": "balkhash_2026-08-09_1344_IMG_2706.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2721",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "14:07",
    "takenAt": "2026-08-09T14:07:59",
    "day": "2026-08-09",
    "partOfDay": "День",
    "count": 2,
    "frames": [
      {
        "id": "IMG_2721",
        "src": "/media/photos/IMG_2721.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T14:07:59",
        "downloadName": "balkhash_2026-08-09_1407_IMG_2721.jpg"
      },
      {
        "id": "IMG_2722",
        "src": "/media/photos/IMG_2722.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T14:08:03",
        "downloadName": "balkhash_2026-08-09_1408_IMG_2722.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2726",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "15:23",
    "takenAt": "2026-08-09T15:23:05",
    "day": "2026-08-09",
    "partOfDay": "День",
    "count": 9,
    "frames": [
      {
        "id": "IMG_2726",
        "src": "/media/photos/IMG_2726.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:05",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2726.jpg"
      },
      {
        "id": "IMG_2727",
        "src": "/media/photos/IMG_2727.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:20",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2727.jpg"
      },
      {
        "id": "IMG_2728",
        "src": "/media/photos/IMG_2728.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:21",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2728.jpg"
      },
      {
        "id": "IMG_2729",
        "src": "/media/photos/IMG_2729.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:23",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2729.jpg"
      },
      {
        "id": "IMG_2730",
        "src": "/media/photos/IMG_2730.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:24",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2730.jpg"
      },
      {
        "id": "IMG_2731",
        "src": "/media/photos/IMG_2731.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:36",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2731.jpg"
      },
      {
        "id": "IMG_2732",
        "src": "/media/photos/IMG_2732.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:37",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2732.jpg"
      },
      {
        "id": "IMG_2733",
        "src": "/media/photos/IMG_2733.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:38",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2733.jpg"
      },
      {
        "id": "IMG_2734",
        "src": "/media/photos/IMG_2734.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:23:39",
        "downloadName": "balkhash_2026-08-09_1523_IMG_2734.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2736",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "15:24",
    "takenAt": "2026-08-09T15:24:20",
    "day": "2026-08-09",
    "partOfDay": "День",
    "count": 5,
    "frames": [
      {
        "id": "IMG_2736",
        "src": "/media/photos/IMG_2736.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:20",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2736.jpg"
      },
      {
        "id": "IMG_2737",
        "src": "/media/photos/IMG_2737.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:22",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2737.jpg"
      },
      {
        "id": "IMG_2738",
        "src": "/media/photos/IMG_2738.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:24",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2738.jpg"
      },
      {
        "id": "IMG_2739",
        "src": "/media/photos/IMG_2739.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:27",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2739.jpg"
      },
      {
        "id": "IMG_2740",
        "src": "/media/photos/IMG_2740.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:29",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2740.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2741",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "15:24",
    "takenAt": "2026-08-09T15:24:49",
    "day": "2026-08-09",
    "partOfDay": "День",
    "count": 5,
    "frames": [
      {
        "id": "IMG_2741",
        "src": "/media/photos/IMG_2741.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:49",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2741.jpg"
      },
      {
        "id": "IMG_2742",
        "src": "/media/photos/IMG_2742.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:53",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2742.jpg"
      },
      {
        "id": "IMG_2743",
        "src": "/media/photos/IMG_2743.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:53",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2743.jpg"
      },
      {
        "id": "IMG_2744",
        "src": "/media/photos/IMG_2744.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:54",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2744.jpg"
      },
      {
        "id": "IMG_2745",
        "src": "/media/photos/IMG_2745.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T15:24:55",
        "downloadName": "balkhash_2026-08-09_1524_IMG_2745.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2766",
    "part": "astana",
    "kind": "single",
    "undated": false,
    "date": "2026-08-09",
    "time": "19:28",
    "takenAt": "2026-08-09T19:28:18",
    "day": "2026-08-09",
    "partOfDay": "Вечер",
    "count": 1,
    "frames": [
      {
        "id": "IMG_2766",
        "src": "/media/photos/IMG_2766.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:28:18",
        "downloadName": "balkhash_2026-08-09_1928_IMG_2766.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2772",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "19:36",
    "takenAt": "2026-08-09T19:36:53",
    "day": "2026-08-09",
    "partOfDay": "Вечер",
    "count": 6,
    "frames": [
      {
        "id": "IMG_2772",
        "src": "/media/photos/IMG_2772.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:36:53",
        "downloadName": "balkhash_2026-08-09_1936_IMG_2772.jpg"
      },
      {
        "id": "IMG_2773",
        "src": "/media/photos/IMG_2773.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:36:54",
        "downloadName": "balkhash_2026-08-09_1936_IMG_2773.jpg"
      },
      {
        "id": "IMG_2774",
        "src": "/media/photos/IMG_2774.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:36:56",
        "downloadName": "balkhash_2026-08-09_1936_IMG_2774.jpg"
      },
      {
        "id": "IMG_2775",
        "src": "/media/photos/IMG_2775.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:36:58",
        "downloadName": "balkhash_2026-08-09_1936_IMG_2775.jpg"
      },
      {
        "id": "IMG_2776",
        "src": "/media/photos/IMG_2776.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:36:59",
        "downloadName": "balkhash_2026-08-09_1936_IMG_2776.jpg"
      },
      {
        "id": "IMG_2777",
        "src": "/media/photos/IMG_2777.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:37:00",
        "downloadName": "balkhash_2026-08-09_1937_IMG_2777.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2778",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "19:37",
    "takenAt": "2026-08-09T19:37:18",
    "day": "2026-08-09",
    "partOfDay": "Вечер",
    "count": 2,
    "frames": [
      {
        "id": "IMG_2778",
        "src": "/media/photos/IMG_2778.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:37:18",
        "downloadName": "balkhash_2026-08-09_1937_IMG_2778.jpg"
      },
      {
        "id": "IMG_2779",
        "src": "/media/photos/IMG_2779.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:37:19",
        "downloadName": "balkhash_2026-08-09_1937_IMG_2779.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2780",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "19:37",
    "takenAt": "2026-08-09T19:37:36",
    "day": "2026-08-09",
    "partOfDay": "Вечер",
    "count": 3,
    "frames": [
      {
        "id": "IMG_2780",
        "src": "/media/photos/IMG_2780.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:37:36",
        "downloadName": "balkhash_2026-08-09_1937_IMG_2780.jpg"
      },
      {
        "id": "IMG_2781",
        "src": "/media/photos/IMG_2781.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:37:38",
        "downloadName": "balkhash_2026-08-09_1937_IMG_2781.jpg"
      },
      {
        "id": "IMG_2782",
        "src": "/media/photos/IMG_2782.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:37:39",
        "downloadName": "balkhash_2026-08-09_1937_IMG_2782.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2784",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "19:39",
    "takenAt": "2026-08-09T19:39:43",
    "day": "2026-08-09",
    "partOfDay": "Вечер",
    "count": 6,
    "frames": [
      {
        "id": "IMG_2784",
        "src": "/media/photos/IMG_2784.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:39:43",
        "downloadName": "balkhash_2026-08-09_1939_IMG_2784.jpg"
      },
      {
        "id": "IMG_2785",
        "src": "/media/photos/IMG_2785.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:39:46",
        "downloadName": "balkhash_2026-08-09_1939_IMG_2785.jpg"
      },
      {
        "id": "IMG_2786",
        "src": "/media/photos/IMG_2786.jpg",
        "width": 2560,
        "height": 1920,
        "takenAt": "2026-08-09T19:39:48",
        "downloadName": "balkhash_2026-08-09_1939_IMG_2786.jpg"
      },
      {
        "id": "IMG_2787",
        "src": "/media/photos/IMG_2787.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:39:50",
        "downloadName": "balkhash_2026-08-09_1939_IMG_2787.jpg"
      },
      {
        "id": "IMG_2788",
        "src": "/media/photos/IMG_2788.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:39:51",
        "downloadName": "balkhash_2026-08-09_1939_IMG_2788.jpg"
      },
      {
        "id": "IMG_2789",
        "src": "/media/photos/IMG_2789.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:39:52",
        "downloadName": "balkhash_2026-08-09_1939_IMG_2789.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2792",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-09",
    "time": "19:41",
    "takenAt": "2026-08-09T19:41:46",
    "day": "2026-08-09",
    "partOfDay": "Вечер",
    "count": 2,
    "frames": [
      {
        "id": "IMG_2792",
        "src": "/media/photos/IMG_2792.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:41:46",
        "downloadName": "balkhash_2026-08-09_1941_IMG_2792.jpg"
      },
      {
        "id": "IMG_2793",
        "src": "/media/photos/IMG_2793.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:41:48",
        "downloadName": "balkhash_2026-08-09_1941_IMG_2793.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2794",
    "part": "astana",
    "kind": "single",
    "undated": false,
    "date": "2026-08-09",
    "time": "19:42",
    "takenAt": "2026-08-09T19:42:10",
    "day": "2026-08-09",
    "partOfDay": "Вечер",
    "count": 1,
    "frames": [
      {
        "id": "IMG_2794",
        "src": "/media/photos/IMG_2794.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-09T19:42:10",
        "downloadName": "balkhash_2026-08-09_1942_IMG_2794.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2800",
    "part": "astana",
    "kind": "single",
    "undated": false,
    "date": "2026-08-10",
    "time": "12:49",
    "takenAt": "2026-08-10T12:49:05",
    "day": "2026-08-10",
    "partOfDay": "День",
    "count": 1,
    "frames": [
      {
        "id": "IMG_2800",
        "src": "/media/photos/IMG_2800.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T12:49:05",
        "downloadName": "balkhash_2026-08-10_1249_IMG_2800.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2810",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-10",
    "time": "19:33",
    "takenAt": "2026-08-10T19:33:12",
    "day": "2026-08-10",
    "partOfDay": "Вечер",
    "count": 15,
    "frames": [
      {
        "id": "IMG_2810",
        "src": "/media/photos/IMG_2810.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:12",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2810.jpg"
      },
      {
        "id": "IMG_2811",
        "src": "/media/photos/IMG_2811.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:14",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2811.jpg"
      },
      {
        "id": "IMG_2812",
        "src": "/media/photos/IMG_2812.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:17",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2812.jpg"
      },
      {
        "id": "IMG_2813",
        "src": "/media/photos/IMG_2813.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:18",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2813.jpg"
      },
      {
        "id": "IMG_2814",
        "src": "/media/photos/IMG_2814.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:19",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2814.jpg"
      },
      {
        "id": "IMG_2815",
        "src": "/media/photos/IMG_2815.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:20",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2815.jpg"
      },
      {
        "id": "IMG_2816",
        "src": "/media/photos/IMG_2816.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:22",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2816.jpg"
      },
      {
        "id": "IMG_2817",
        "src": "/media/photos/IMG_2817.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:23",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2817.jpg"
      },
      {
        "id": "IMG_2818",
        "src": "/media/photos/IMG_2818.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:24",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2818.jpg"
      },
      {
        "id": "IMG_2819",
        "src": "/media/photos/IMG_2819.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:25",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2819.jpg"
      },
      {
        "id": "IMG_2820",
        "src": "/media/photos/IMG_2820.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:40",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2820.jpg"
      },
      {
        "id": "IMG_2821",
        "src": "/media/photos/IMG_2821.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:40",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2821.jpg"
      },
      {
        "id": "IMG_2822",
        "src": "/media/photos/IMG_2822.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:42",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2822.jpg"
      },
      {
        "id": "IMG_2823",
        "src": "/media/photos/IMG_2823.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:43",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2823.jpg"
      },
      {
        "id": "IMG_2824",
        "src": "/media/photos/IMG_2824.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:33:44",
        "downloadName": "balkhash_2026-08-10_1933_IMG_2824.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2825",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-10",
    "time": "19:34",
    "takenAt": "2026-08-10T19:34:22",
    "day": "2026-08-10",
    "partOfDay": "Вечер",
    "count": 6,
    "frames": [
      {
        "id": "IMG_2825",
        "src": "/media/photos/IMG_2825.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:34:22",
        "downloadName": "balkhash_2026-08-10_1934_IMG_2825.jpg"
      },
      {
        "id": "IMG_2826",
        "src": "/media/photos/IMG_2826.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:34:28",
        "downloadName": "balkhash_2026-08-10_1934_IMG_2826.jpg"
      },
      {
        "id": "IMG_2827",
        "src": "/media/photos/IMG_2827.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:34:30",
        "downloadName": "balkhash_2026-08-10_1934_IMG_2827.jpg"
      },
      {
        "id": "IMG_2828",
        "src": "/media/photos/IMG_2828.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:34:31",
        "downloadName": "balkhash_2026-08-10_1934_IMG_2828.jpg"
      },
      {
        "id": "IMG_2829",
        "src": "/media/photos/IMG_2829.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:34:33",
        "downloadName": "balkhash_2026-08-10_1934_IMG_2829.jpg"
      },
      {
        "id": "IMG_2830",
        "src": "/media/photos/IMG_2830.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T19:34:34",
        "downloadName": "balkhash_2026-08-10_1934_IMG_2830.jpg"
      }
    ]
  },
  {
    "id": "s-IMG_2833",
    "part": "astana",
    "kind": "series",
    "undated": false,
    "date": "2026-08-10",
    "time": "21:08",
    "takenAt": "2026-08-10T21:08:04",
    "day": "2026-08-10",
    "partOfDay": "Вечер",
    "count": 7,
    "frames": [
      {
        "id": "IMG_2833",
        "src": "/media/photos/IMG_2833.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T21:08:04",
        "downloadName": "balkhash_2026-08-10_2108_IMG_2833.jpg"
      },
      {
        "id": "IMG_2834",
        "src": "/media/photos/IMG_2834.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T21:08:05",
        "downloadName": "balkhash_2026-08-10_2108_IMG_2834.jpg"
      },
      {
        "id": "IMG_2835",
        "src": "/media/photos/IMG_2835.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T21:08:05",
        "downloadName": "balkhash_2026-08-10_2108_IMG_2835.jpg"
      },
      {
        "id": "IMG_2836",
        "src": "/media/photos/IMG_2836.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T21:08:06",
        "downloadName": "balkhash_2026-08-10_2108_IMG_2836.jpg"
      },
      {
        "id": "IMG_2837",
        "src": "/media/photos/IMG_2837.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T21:08:07",
        "downloadName": "balkhash_2026-08-10_2108_IMG_2837.jpg"
      },
      {
        "id": "IMG_2838",
        "src": "/media/photos/IMG_2838.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T21:08:09",
        "downloadName": "balkhash_2026-08-10_2108_IMG_2838.jpg"
      },
      {
        "id": "IMG_2839",
        "src": "/media/photos/IMG_2839.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": "2026-08-10T21:08:10",
        "downloadName": "balkhash_2026-08-10_2108_IMG_2839.jpg"
      }
    ]
  },
  {
    "id": "s-extra-lake",
    "part": "lake",
    "kind": "series",
    "undated": true,
    "date": "",
    "time": "",
    "takenAt": "",
    "day": "",
    "partOfDay": "",
    "count": 5,
    "frames": [
      {
        "id": "EXTRA_09",
        "src": "/media/photos/EXTRA_09.jpg",
        "width": 1280,
        "height": 960,
        "takenAt": null,
        "downloadName": "balkhash_lake_EXTRA_09.jpg"
      },
      {
        "id": "EXTRA_10",
        "src": "/media/photos/EXTRA_10.jpg",
        "width": 960,
        "height": 1280,
        "takenAt": null,
        "downloadName": "balkhash_lake_EXTRA_10.jpg"
      },
      {
        "id": "EXTRA_13",
        "src": "/media/photos/EXTRA_13.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": null,
        "downloadName": "balkhash_lake_EXTRA_13.jpg"
      },
      {
        "id": "EXTRA_14",
        "src": "/media/photos/EXTRA_14.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": null,
        "downloadName": "balkhash_lake_EXTRA_14.jpg"
      },
      {
        "id": "EXTRA_15",
        "src": "/media/photos/EXTRA_15.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": null,
        "downloadName": "balkhash_lake_EXTRA_15.jpg"
      }
    ]
  },
  {
    "id": "s-extra-astana",
    "part": "astana",
    "kind": "series",
    "undated": true,
    "date": "",
    "time": "",
    "takenAt": "",
    "day": "",
    "partOfDay": "",
    "count": 10,
    "frames": [
      {
        "id": "EXTRA_01",
        "src": "/media/photos/EXTRA_01.jpg",
        "width": 1280,
        "height": 960,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_01.jpg"
      },
      {
        "id": "EXTRA_02",
        "src": "/media/photos/EXTRA_02.jpg",
        "width": 960,
        "height": 1280,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_02.jpg"
      },
      {
        "id": "EXTRA_03",
        "src": "/media/photos/EXTRA_03.jpg",
        "width": 960,
        "height": 1280,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_03.jpg"
      },
      {
        "id": "EXTRA_04",
        "src": "/media/photos/EXTRA_04.jpg",
        "width": 960,
        "height": 1280,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_04.jpg"
      },
      {
        "id": "EXTRA_05",
        "src": "/media/photos/EXTRA_05.jpg",
        "width": 960,
        "height": 1280,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_05.jpg"
      },
      {
        "id": "EXTRA_06",
        "src": "/media/photos/EXTRA_06.jpg",
        "width": 1280,
        "height": 960,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_06.jpg"
      },
      {
        "id": "EXTRA_07",
        "src": "/media/photos/EXTRA_07.jpg",
        "width": 1280,
        "height": 960,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_07.jpg"
      },
      {
        "id": "EXTRA_08",
        "src": "/media/photos/EXTRA_08.jpg",
        "width": 1280,
        "height": 960,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_08.jpg"
      },
      {
        "id": "EXTRA_11",
        "src": "/media/photos/EXTRA_11.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_11.jpg"
      },
      {
        "id": "EXTRA_12",
        "src": "/media/photos/EXTRA_12.jpg",
        "width": 1920,
        "height": 2560,
        "takenAt": null,
        "downloadName": "balkhash_astana_EXTRA_12.jpg"
      }
    ]
  }
];

export const videos: VideoClip[] = [];
