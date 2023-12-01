import { Request } from "..";

export function testGet() {
  return Request.get<any>({
    url: "/get",
    data: {
      name: "sky",
      age: 16,
    },
  });
}

export function testPost() {
  return Request.post<any>({
    url: "/post",
    data: {
      name: "blue",
      age: 16,
    },
  });
}