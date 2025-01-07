export interface TypeColorCard{
    name: string
    color: string
    path?: string
}

export const colors: TypeColorCard[] = [
    { name: "Black screen", color: "black",  path: "/" },
    { name: "White screen", color: "white", path: "/white-screen" },
    { name: "Blue screen", color: "blue", path: "/blue-screen" },
    { name: "Green screen", color: "#00FF00", path: "/green-screen" },
    { name: "Red screen", color: "red", path: "/red-screen" },
    { name: "Yellow screen", color: "#FFFF00", path: "/yellow-screen" },
    { name: "Orange screen", color: "#FFA500", path: "/orange-screen" },
    { name: "Pink screen", color: "#FFC0CB", path: "/pink-screen" },
    { name: "Purple screen", color: "purple", path: "/purple-screen" },
  ];
  