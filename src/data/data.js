import DttoFriends from "@/data/DttoFriends";
import MilkCat from "@/data/MilkCat";
import PopTeam from "@/data/PopTeam";
import Capoo from "@/data/Capoo";
import Cinnamoroll from "@/data/Cinnamoroll";
import Pooh from "@/data/Pooh";
import Sumikko from "@/data/Sumikko";

export default new Map([
  ["PopTeam", {
    title: "Pop子",
    color: new Map([
      ["normal", "26 66 157"],
      ["light", "233 239 252"],
    ]),
    bgPos: "center center",
    links: PopTeam,
  }],
  ["Cinnamoroll", {
    title: "仙拿魔奴",
    color: new Map([
      ["normal", "155 196 233"],
      ["light", "234 243 251"],
    ]),
    bgPos: "right bottom",
    links: Cinnamoroll,
  }],
  ["DttoFriends", {
    title: "dtto friends",
    color: new Map([
      ["normal", "242 169 62"],
      ["light", "251 233 208"],
    ]),
    bgPos: "center center",
    links: DttoFriends,
  }],
  ["Pooh", {
    title: "Pooh",
    color: new Map([
      ["normal", "237 180 49"],
      ["light", "251 239 208"],
    ]),
    bgPos: "center center",
    links: Pooh,
  }],
  ["MilkCat", {
    title: "奶泡貓",
    color: new Map([
      ["normal", "160 115 64"],
      ["light", "240 230 219"],
    ]),
    bgPos: "center center",
    links: MilkCat,
  }],
  ["Capoo", {
    title: "咖波",
    color: new Map([
      ["normal", "93 188 239"],
      ["light", "224 241 251"],
    ]),
    bgPos: "center bottom",
    links: Capoo,
  }],
  ["Sumikko", {
    title: "角落生物",
    color: new Map([
      ["normal", "88 66 46"],
      ["light", "237 229 222"],
    ]),
    bgPos: "center center",
    links: Sumikko,
  }],
]);
