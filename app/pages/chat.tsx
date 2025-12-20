import { Link } from "react-router"
import { useUser } from "~/modules/user/lib/use-user"
import type { Route } from "./+types/chat"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { user, logout } = useUser()
  const isAuthorized = user.isAuthorized

  return (
    <div className="container mx-auto flex flex-col gap-4 py-12 px-6">
      <h1 className="text-2xl font-semibold">Главная</h1>
      <p>
        Позже тут будет чат
      </p>

      <div className="rounded-lg border p-4">
        <p>email: {user.email ?? "—"}</p>
        <p>authorized status: {String(isAuthorized)}</p>
      </div>
      {isAuthorized ? (
        <button
          className="w-fit rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
          onClick={logout}
        >
          Выйти
        </button>
      ) : (
        <div className="flex gap-4 text-sm">
          <Link className="text-primary underline-offset-4 hover:underline border-2 rounded-xl p-4" to="/sign-in">
            Войти
          </Link>
          <Link className="text-primary underline-offset-4 hover:underline border-2 rounded-xl p-4" to="/sign-up">
            Зарегистрироваться
          </Link>
        </div>
      )}
    </div>
  )
}
