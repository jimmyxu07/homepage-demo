import Image from "next/image";
import { ArrowDown, Github, MessageCircle, ExternalLink, Users, Brain, Trophy, Target, Mail, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full">
              <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">AI Actionist & Tech Innovator</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              Jimmy AI
              <span className="block text-3xl lg:text-5xl mt-2 font-normal text-slate-600 dark:text-slate-400">
                许泓楷
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              香港大学信息专业硕士 | 国内头部AI社群行动家（5W+付费会员）
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              专注AI编程&智能体，天赋数字/金钱关系咨询师，致力通过AI赋能提效，引领十万人驾驭AI时代的变革
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full transition-all transform hover:scale-105 shadow-lg">
                联系我
              </a>
              <a href="#skills" className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all transform hover:scale-105">
                了解更多
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative">
              <Image
                src="/profile.jpg"
                alt="Jimmy AI"
                width={400}
                height={400}
                className="rounded-full shadow-2xl border-4 border-white dark:border-slate-800 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              核心技能
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">AI技术专家</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                10年+后端运维经验，专注于推动AI技术在自动化运维应用落地。通过AI编程和智能体技术，显著提升工作效率和创新能力。
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">社群运营专家</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                国内头部AI社群（5W+付费会员）俱乐部训练营教练，半年内公众号垂直领域涨粉近3K+，累计知识付费收入30W+。
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">天赋潜能导师</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                天赋数字/金钱关系咨询师，通过解读客户天赋数字与金钱关系，定位核心天赋优势、疏通财富卡点，找到专属成长赛道。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              主要成就
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    主导运维自动化体系
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    成功构建企业级运维自动化平台，提升运维效率显著，年节省成本超百万人民币。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    打造个人副业AIP
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    成功打造个人AI产品副业，公众号半年垂直领域涨粉近3K+，建立稳定收入来源。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-4">
                <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    知识付费领域探索者
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    知识付费领域累计付费30W+，持续探索AI与心理学结合的创新落地场景。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            愿景使命 🌈
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed">
            致力将前沿AI技术与天赋潜能洞察相结合，帮助职场人士和创业者破解效率瓶颈与成长卡点，实现职场跃迁与财富升级。
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              联系方式
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/wechat-qr.jpg"
                  alt="微信二维码"
                  width={200}
                  height={200}
                  className="mx-auto rounded-xl shadow-lg"
                />
              </div>
              <p className="text-lg font-medium text-slate-900 dark:text-white mb-2">微信：Jimmy_Xu07</p>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <a
                href="https://mp.weixin.qq.com/s/3S4nk9T2yqSggVFS-EmIPA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                <span className="text-slate-900 dark:text-white font-medium">公众号</span>
                <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
              </a>

              <a
                href="https://www.zhihu.com/people/benhsu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                <Globe className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                <span className="text-slate-900 dark:text-white font-medium">知乎</span>
                <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
              </a>

              <a
                href="https://juejin.cn/user/1933359986272409"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                <Globe className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                <span className="text-slate-900 dark:text-white font-medium">掘金</span>
                <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
              </a>

              <a
                href="https://github.com/jimmyxu07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
              >
                <Github className="w-6 h-6 text-slate-900 dark:text-white group-hover:text-slate-700" />
                <span className="text-slate-900 dark:text-white font-medium">GitHub</span>
                <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 dark:text-slate-400">
        <p>&copy; 2025 Jimmy AI. All rights reserved.</p>
      </footer>
    </div>
  );
}