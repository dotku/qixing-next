import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <div className={styles.description}>
          <div>
            <a
              href="https://english.qixingaupair.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/11894021_1554793991.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={284}
                height={123}
                priority
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.grid}>
          <div className={styles.card} style={{ margin: 0 }}>
            <div className="ev-module-text ev-module-edit-box" id="Mo_99ttX">
              <p className={styles.evTextArticle2} style={{ marginTop: 40 }}>
                <strong>QiXing AuPair</strong> offers a variety of programs for
                foreign young people who are hoping to come to China and
                experience Chinese culture/language as an Au Pair or English
                teacher for internship. We also provide these programs to
                Chinese students who want to go abroad to experience a different
                culture and lifestyle.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <iframe
              frameborder="0"
              src="https://v.qq.com/txp/iframe/player.html?vid=q09259fybz7"
              width="529"
              height="356"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>
              QiXing Au Pair is an international agency based in Shenzhen,
              China, dedicated to promoting cultural exchange between China and
              the rest of the world.{" "}
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Address <span>-&gt;</span>
            </h2>
            <div
              className="ev-module-text ev-module-edit-box"
              data-animate-name="fadeInUp"
              data-animate-duration="1.00s"
              data-animate-delay="0.10s"
              id="Mo_SMuj95"
              data-loadanimate="1"
            >
              <span>Room 202, Shangmei Science and Technology Building</span>
              <span>No. 2009 Shahexi Road</span>
              <div>Nanshan District</div>
              <div>Shenzhen</div>
              <div>Guangdong Province</div>
              <div>China</div>
            </div>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://english.qixingaupair.com/index.php?s=/index/about/fid/125/eid/1168.html#id"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Phone Call <span>-&gt;</span>
            </h2>
            <p>
              <span>
                <a
                  href="https://english.qixingaupair.com/index.php?s=/index/about/fid/125/eid/1168.html#id"
                  data-ke-src="https://english.qixingaupair.com/index.php?s=/index/about/fid/125/eid/1168.html#id"
                >
                  {" "}
                </a>{" "}
                <span>+ 86 181 2636 0492&nbsp;</span>+ 86 153 3889 5076
                <a
                  href="https://english.qixingaupair.com/index.php?s=/index/about/fid/125/eid/1168.html#id"
                  data-ke-src="https://english.qixingaupair.com/index.php?s=/index/about/fid/125/eid/1168.html#id"
                >
                  &nbsp;
                </a>
                <div>+ 86 181 2636 4051</div>
                <div>Bejing Time: 9am - 6pm</div>
              </span>
            </p>
          </a>

          <a
            href="https://english.qixingaupair.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Email <span>-&gt;</span>
            </h2>
            <span>
              <span>
                <div>qixingaupairdg@163.com</div>
                <div>Qixingaupair2022@outlook.com</div>
                <div>qixingchen2022@outlook.com</div>
              </span>
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
