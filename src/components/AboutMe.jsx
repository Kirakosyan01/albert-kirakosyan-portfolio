import { Briefcase, Code, User } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 h-full">
            <h3 className="text-2xl font-bold">Clinical SAS Programmer</h3>
            <p className="text-muted-foreground">
              {" "}
              I'm a Clinical SAS Programmer with a background in programming and
              data analysis. I focus on transforming complex clinical data into
              clear, actionable insights through efficient and reliable code.
            </p>
            <p className="text-muted-foreground">
              {" "}
              I'm continually advancing my technical and analytical skills to
              contribute to high-quality clinical research and data-driven
              decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Albert_Kirakosyan_CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Clinical SAS Programming
                  </h4>
                  <p className="text-muted-foreground">
                    Developing and validating clinical datasets and reports
                    using SAS to ensure data quality, compliance, and accuracy
                    in clinical research.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Player</h4>
                  <p className="text-muted-foreground">
                    I enjoy working in teams, communicating clearly, and
                    collaborating to build better solutions together.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Career Growth</h4>
                  <p className="text-muted-foreground">
                    I'm focused on professional growth and constantly seeking
                    new opportunities to expand my knowledge and skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
