import mastermind from "../assets/projects/mastermind.png"

import kaypic from "../assets/projects/kaypic.png"
import kaypic1 from "../assets/projects/kaypic1.png"
import kaypic2 from "../assets/projects/kaypic2.png"

import memotag from "../assets/projects/memotag.png"
import memotag1 from "../assets/projects/memotag1.png"
import memotag2 from "../assets/projects/memotag2.png"

import tictactoe from "../assets/projects/tictactoe.png"
import tictactoe1 from "../assets/projects/tictactoe1.png"
import tictactoe2 from "../assets/projects/tictactoe2.png"

import raspberry from "../assets/projects/raspberry.png"

import stageconnect from "../assets/projects/stageconnect.png"
import stageconnect1 from "../assets/projects/stageconnect1.png"
import stageconnect2 from "../assets/projects/stageconnect2.png"

export type ProjectId =
  | "mastermind"
  | "kaypic"
  | "memotag"
  | "tictactoe"
  | "raspberry"
  | "stageconnect"

export type Project = {
  id: ProjectId
  images: string[]
  techs: string[]
  github: string
}

export const projects: Project[] = [
  {
    id: "mastermind",
    images: [mastermind],
    techs: ["Java", "OOP", "Algorithms"],
    github: "https://github.com/IEH21/Mastermind",
  },
  {
    id: "kaypic",
    images: [kaypic, kaypic1, kaypic2],
    techs: ["ASP.NET", "C#", "JS", "Razor", "SignalR", "ASP.NET Core Identity", "Swagger"],
    github: "https://github.com/IEH21/Kaypic-Communication",
  },
  {
    id: "memotag",
    images: [memotag, memotag1, memotag2],
    techs: ["Kotlin", "Android", "SQLite", "MVVM"],
    github: "https://github.com/IEH21/MemoTag",
  },
  {
    id: "tictactoe",
    images: [tictactoe, tictactoe1, tictactoe2],
    techs: ["Kotlin", "Android", "AI logic"],
    github: "https://github.com/IEH21/Tic-Tac-Toe-Android",
  },
  {
    id: "raspberry",
    images: [raspberry],
    techs: ["Python", "Raspberry Pi", "IoT"],
    github: "https://github.com/IEH21/raspberrypi-touch-display-project",
  },
  {
    id: "stageconnect",
    images: [stageconnect, stageconnect1, stageconnect2],
    techs: ["Kotlin", "Android"],
    github: "https://github.com/IEH21/recherche-de-stage",
  },
]
