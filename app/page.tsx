import Image from "next/image";
import { ArrowDown, Github, MessageCircle, ExternalLink, Users, Brain, Trophy, Target, Globe, Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,#1e1b4b_0%,transparent_50%)] opacity-30"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_80%,#312e81_0%,transparent_50%)] opacity-20"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-purple-500/20 rounded-full">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-200">AI远见家 & 数字架构师</span>
              </div>

              {/* Name */}
              <div className="space-y-4 text-center">
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                    Jimmy AI
                  </span>
                </h1>
                <p className="text-4xl lg:text-5xl font-bold text-gray-400">
                  许泓楷
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4 text-gray-300 text-center">
                <p className="text-xl leading-relaxed">
                  香港大学信息技术硕士 | 头部AI社群先驱（5万+成员）
                </p>
                <p className="text-lg leading-relaxed text-gray-400">
                  专注于AI编程与智能体技术，天赋数字咨询师，致力于通过AI赋能效率提升，引领10万人掌握AI时代转型
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <a
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
  立即连接
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="#skills"
                  className="px-8 py-4 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-xl font-medium hover:bg-gray-800/50 hover:border-gray-700 transition-all duration-300 hover:scale-105"
                >
  了解更多
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <Image
                  src="/profile.jpg"
                  alt="Jimmy AI"
                  width={450}
                  height={450}
                  className="relative rounded-3xl shadow-2xl border border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">Scroll</span>
            <ArrowDown className="w-5 h-5 text-gray-600 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4c1d95_0%,transparent_70%)] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 backdrop-blur-xl border border-purple-500/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Core Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                核心技能
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              三大核心领域的深度融合，打造独特的价值主张
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI技术专家</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  10年+后端运维经验，专注于推动AI技术在自动化运维应用落地。通过AI编程和智能体技术，显著提升工作效率和创新能力。
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>深度技术实践</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">社群运营专家</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  国内头部AI社群（5W+付费会员）俱乐部训练营教练，半年内公众号垂直领域涨粉近3K+，累计知识付费收入30W+。
                </p>
                <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>影响力建设</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">天赋潜能导师</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  天赋数字/金钱关系咨询师，通过解读客户天赋数字与金钱关系，定位核心天赋优势、疏通财富卡点，找到专属成长赛道。
                </p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  <span>个人成长指导</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-32 px-4 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#1e3a8a_0%,transparent_50%)] opacity-15"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-xl border border-yellow-500/20 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-300">Key Achievements</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
                主要成就
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              里程碑式的成果，见证成长与突破
            </p>
          </div>

          <div className="space-y-8">
            <div className="group relative bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 hover:transform hover-scale-102">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    主导运维自动化体系
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    成功构建企业级运维自动化平台，提升运维效率显著，年节省成本超百万人民币。
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">技术创新</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">成本优化</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:transform hover-scale-102">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    打造个人副业AIP
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    成功打造个人AI产品副业，公众号半年垂直领域涨粉近3K+，建立稳定收入来源。
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">内容创业</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full">增长黑客</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500 hover:transform hover-scale-102">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    知识付费领域探索者
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    知识付费领域累计付费30W+，持续探索AI与心理学结合的创新落地场景。
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">知识变现</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">跨界创新</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="relative py-32 px-4 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#a855f7_0%,transparent_50%)] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Vision & Mission</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              愿景使命
            </span>
          </h2>

          <div className="relative">
            <p className="text-2xl lg:text-3xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              致力将前沿AI技术与天赋潜能洞察相结合，帮助职场人士和创业者破解效率瓶颈与成长卡点，实现职场跃迁与财富升级。
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl"></div>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">100K+</div>
              <div className="text-sm text-gray-400 mt-2">赋能人群</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">AI+</div>
              <div className="text-sm text-gray-400 mt-2">技术创新</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400">∞</div>
              <div className="text-sm text-gray-400 mt-2">无限可能</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#3b82f6_0%,transparent_50%)] opacity-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/20 rounded-full mb-8">
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Get In Touch</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                联系方式
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              期待与您的交流合作，共同探索AI时代的无限可能
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">微信</h3>

              <div className="relative group mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-black/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
                  <Image
                    src="/wechat-qr.jpg"
                    alt="微信二维码"
                    width={250}
                    height={250}
                    className="mx-auto rounded-2xl shadow-2xl border border-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-4 text-center">
                <p className="text-xl text-gray-300 font-mono bg-gray-800/50 px-4 py-2 rounded-xl inline-block">
                  微信ID：Jimmy_Xu07
                </p>
                <p className="text-gray-400">扫码添加，请注明来意：）</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">社交媒体</h3>

              <div className="grid gap-4">
                <a
                  href="https://mp.weixin.qq.com/s/3S4nk9T2yqSggVFS-EmIPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover:transform hover-scale-102 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">微信公众号</div>
                        <div className="text-gray-400 text-sm">AI技术分享与洞察</div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>

                <a
                  href="https://www.zhihu.com/people/benhsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-102 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">知乎</div>
                        <div className="text-gray-400 text-sm">深度思考与专业见解</div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>

                <a
                  href="https://juejin.cn/user/1933359986272409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover:transform hover-scale-102 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">掘金</div>
                        <div className="text-gray-400 text-sm">技术实践与经验分享</div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>

                <a
                  href="https://github.com/jimmyxu07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-gray-500/30 transition-all duration-300 hover:transform hover-scale-102 hover:shadow-2xl hover:shadow-gray-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">GitHub</div>
                        <div className="text-gray-400 text-sm">开源项目与代码贡献</div>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-purple-500/20 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Jimmy AI</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            &copy; 2025 Jimmy AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Powered by AI & Human Creativity ✨
          </p>
        </div>
      </footer>
    </div>
  );
}