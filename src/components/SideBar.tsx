import { Button } from "./Button";
import "./../styles/sidebar.scss";

type Genre = {
  id: number;
  title: string;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
};

type SidebarProps = {
  genres: Genre[];
  selectedGenreId: number;
  onClickButton: (genreId: number) => void;
};

export function SideBar({
  genres,
  onClickButton,
  selectedGenreId,
}: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
