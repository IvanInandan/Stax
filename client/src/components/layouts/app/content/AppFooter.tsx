import { Github, Linkedin } from "lucide-react";

const AppFooter = () => {
  return (
    <footer>
      <div className="text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6">
        <p className="text-sm text-balance max-sm:text-center">
          {`©${new Date().getFullYear()}`}{" "}
          <a href="https://github.com/IvanInandan" className="text-primary">
            ivaninandan/dev
          </a>
          , come show some love
        </p>
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com/in/ivaninandan/">
            <Linkedin className="size-4" />
          </a>
          <a href="https://github.com/IvanInandan/Stax/tree/rewrite">
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
