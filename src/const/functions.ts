import { EnumStatus } from "./Types";

const colors = [
  "#FDAF13",
  "#289300",
  "#CB3D00",
  "#0C03D5",
  "#40FF74",
  "#DA0D36",
  "#02B8D8",
  "#8F00CD",
];

export function randomColorAvatar() {
  return colors[Math.floor(Math.random() * colors.length - 1)];
}

export const optionsSelectStatus = () => {
    return [
        {
            value: EnumStatus.PENDING,
            label: EnumStatus.PENDING
        },
        {
            value: EnumStatus.PROGRESS,
            label: EnumStatus.PROGRESS
        },
        {
            value: EnumStatus.BLOCKED,
            label: EnumStatus.BLOCKED
        },
        {
            value: EnumStatus.DONE,
            label: EnumStatus.DONE
        },
    ]
}