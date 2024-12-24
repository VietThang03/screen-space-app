export interface TypeColorCard{
    name: string
    color: string
    path?: string
}

export const colors: TypeColorCard[] = [
    { name: "Black screen", color: "bg-black",  path: "/" },
    { name: "White screen", color: "bg-white", path: "/white-screen" },
    { name: "Blue screen", color: "bg-blue-500", path: "/blue-screen" },
    { name: "Green screen", color: "bg-green-500", path: "/green-screen" },
    { name: "Red screen", color: "bg-red-500", path: "/red-screen" },
    { name: "Yellow screen", color: "bg-yellow-500", path: "/yellow-screen" },
    { name: "Orange screen", color: "bg-orange-500", path: "/orange-screen" },
    { name: "Pink screen", color: "bg-pink-500", path: "/pink-screen" },
    { name: "Purple screen", color: "bg-purple-500", path: "/purple-screen" },
  ];
  