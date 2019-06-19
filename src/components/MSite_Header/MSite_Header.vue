<template>
  <div class="home">
    <header class="headerWraper" style="position: fixed">
      <div class="header-top">
        <a class="logo" href="javascript:;"></a>
        <div class="input">
          <i class="iconfont icon-RectangleCopy1"></i>
          <span class="placeholder">搜索商品，共25209款好物</span>
        </div>
        <span class="login" @click="$router.replace('/personal')">登录</span>
      </div>
      <div class="header-bottom">
        <div class="cateList">
          <div class="cateItem">
            <span>推荐</span>
          </div>
          <div class="cateItem">
            <span>居家生活</span>
          </div>
          <div class="cateItem">
            <span>居家生活</span>
          </div>
        </div>
        <div class="toggleWrap">
          <i class="iconfont icon-arrow-down"></i>
        </div>
      </div>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="img">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="img">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="img">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="img">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="img">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="img">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="img">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/b1a2a21da52f6bb285e765b6d82c4995.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0" alt="img">
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="servicePolicy">
      <div class="serviceItem">
        <i class="iconfont icon-sousuo"></i>
        <span>网易自营品牌</span>
      </div>
      <div class="serviceItem">
        <i class="iconfont icon-sousuo"></i>
        <span>网易自营品牌</span>
      </div>
      <div class="serviceItem">
        <i class="iconfont icon-sousuo"></i>
        <span>网易自营品牌</span>
      </div>
    </div>
    <div class="categoryLists">
      <ul>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="https://yanxuan.nosdn.127.net/0044869a58d0551b9eb2cf05d8ecd11b.png" alt="item">
            <span>新品首发</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="longTab" style="background-color:initial;background-image:url(https://yanxuan.nosdn.127.net/6b2eb7819e2e7802d8cded1246e30697.jpg?imageView&quality=75);background-size:100% 100%;">
      <div class="changeGoods" style="background:url(https://yanxuan.nosdn.127.net/61bb38ff63f456706dc36e2446d808d5.gif?imageView&quality=75);background-size:100% 100%;">
        <a href="javascript:;">
          <div class="innerGood"></div>
        </a>
      </div>
      <div class="twoPlusThree">
        <ul>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/2cbf6bd0d88f776bf7d918730b15ebc8.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;">
              <img src="https://yanxuan.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/2cbf6bd0d88f776bf7d918730b15ebc8.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;">
              <img src="https://yanxuan.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/2cbf6bd0d88f776bf7d918730b15ebc8.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;">
              <img src="https://yanxuan.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/2cbf6bd0d88f776bf7d918730b15ebc8.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;">
              <img src="https://yanxuan.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/2cbf6bd0d88f776bf7d918730b15ebc8.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;">
              <img src="https://yanxuan.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/2cbf6bd0d88f776bf7d918730b15ebc8.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;">
              <img src="https://yanxuan.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
        </ul>
      </div>
      <div class="threePlusOne">
        <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/b30105f1c452dfa26cb401351d971c0b.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;"></a>
        <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/b30105f1c452dfa26cb401351d971c0b.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;"></a>
        <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/b30105f1c452dfa26cb401351d971c0b.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;"></a>
      </div>
      <div class="allCates">
        <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/c2c0cb4fea29c099200333297b2732e7.png?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;">
        </a>
      </div>
      <div class="fourPlusThree">
        <ul>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
          <li>
            <a href="javascript:;" style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
              <div class="itemTitle">
                <div class="itemTitleTop">洗护美妆</div>
                <div class="itemTitleBottom">每满299减100</div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7ab86667397e2a499876e085d4c62e6e.png?imageView&thumbnail=160x160&quality=75" alt="item">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="BossRecommend">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/077fbae661c16e4c0008614a9707bafb.gif" alt="recommend">
      </a>
    </div>
    <div class="twoPlusTwo">
      <ul>
        <li>
          <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
            <div class="title">断单补货王</div>
            <div class="desc">严选必买爆款</div>
            <div class="pics">
              <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="left">
              <img src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&thumbnail=150x150&quality=75" alt="right">
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
            <div class="title">断单补货王</div>
            <div class="desc">严选必买爆款</div>
            <div class="pics">
              <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="left">
              <img src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&thumbnail=150x150&quality=75" alt="right">
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
            <div class="title">断单补货王</div>
            <div class="desc">严选必买爆款</div>
            <div class="pics">
              <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="left">
              <img src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&thumbnail=150x150&quality=75" alt="right">
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
            <div class="title">断单补货王</div>
            <div class="desc">严选必买爆款</div>
            <div class="pics">
              <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="left">
              <img src="https://yanxuan.nosdn.127.net/d335c626a3ca7459739f668e1ef9478b.png?imageView&thumbnail=150x150&quality=75" alt="right">
            </div>
          </a>
        </li>
      </ul>
    </div>
    <Split/>
    <div class="privateOrder">
      <div class="text">私人订制</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
              <div class="shop">
                <span class="name">舒适摔纹牛皮，便捷自动扣</span>
                <span class="price">￥39</span>
              </div>
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <Split/>
    <div class="limitTime">
      <div class="line">
        <span class="text">
          <span>限时购</span>
          <span>01:06:09</span>
        </span>
        <span class="more">
          <span>更多</span>
          <span class="iconfont icon-jiantou-"></span>
        </span>
      </div>
      <div class="list">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <span class="price">￥39</span>
          <span class="oldPrice">￥69</span>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <span class="price">￥39</span>
          <span class="oldPrice">￥69</span>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <span class="price">￥39</span>
          <span class="oldPrice">￥69</span>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <span class="price">￥39</span>
          <span class="oldPrice">￥69</span>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <span class="price">￥39</span>
          <span class="oldPrice">￥69</span>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/ae9e77be64f65a839759cb13e8499c38.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <span class="price">￥39</span>
          <span class="oldPrice">￥69</span>
        </a>
      </div>
    </div>
    <Split/>
    <div class="newShop">
      <div class="line">
        <span class="text">
          <span>新品首发</span>
        </span>
        <span class="more">
          <span>更多</span>
          <span class="iconfont icon-jiantou-"></span>
        </span>
      </div>
      <div class="list">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/11e42ef7ac3496e2762b95c2c0dbf850.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/11e42ef7ac3496e2762b95c2c0dbf850.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/11e42ef7ac3496e2762b95c2c0dbf850.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/11e42ef7ac3496e2762b95c2c0dbf850.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/11e42ef7ac3496e2762b95c2c0dbf850.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/11e42ef7ac3496e2762b95c2c0dbf850.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
      </div>
    </div>
    <Split/>
    <div class="hot">
      <div class="line">
        <span class="text">
          <span>人气推荐</span>
        </span>
        <span class="more">
          <span>更多</span>
          <span class="iconfont icon-jiantou-"></span>
        </span>
      </div>
      <div class="list">
        <div class="special">
          <a href="javascript:;">
            <div class="pic">
              <img src="https://yanxuan.nosdn.127.net/08f6e74986069813ab7dab4c2491cf96.png?imageView&quality=65&thumbnail=280x280" alt="shop">
            </div>
            <div class="text">
              <div class="mark">
                <span class="limit">限时购</span>
                <span class="full">满赠</span>
              </div>
              <div class="name">泰国制造 天然乳胶凉感席套装 可机洗</div>
              <div class="desc">天然乳胶内芯，科技凉感面料</div>
              <div class="price">￥399</div>
            </div>
          </a>
        </div>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/0f06898140d349b7e466cc5b41265685.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/0f06898140d349b7e466cc5b41265685.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/0f06898140d349b7e466cc5b41265685.png?imageView&quality=65&thumbnail=330x330" alt="shop">
          <div class="shop">
            <span class="name">舒适摔纹牛皮，便捷自动扣</span>
            <span class="price">￥39</span>
          </div>
        </a>
      </div>
    </div>
    <Split/>
    <div class="cateHot">
      <div class="line">
        <span class="text">类目热销榜</span>
      </div>
      <div class="content">
        <div class="lineOne">
          <a href="javascript:;">
            <span class="name">热销榜</span>
            <img src="http://yanxuan.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
          <a href="javascript:;">
            <span class="name">热销榜</span>
            <img src="http://yanxuan.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
        </div>
        <div class="lineTwo">
          <a href="javascript:;">
            <span class="name">服饰箱包榜</span>
            <img src="http://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
          <a href="javascript:;">
            <span class="name">服饰箱包榜</span>
            <img src="http://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
          <a href="javascript:;">
            <span class="name">服饰箱包榜</span>
            <img src="http://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
          <a href="javascript:;">
            <span class="name">服饰箱包榜</span>
            <img src="http://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
          <a href="javascript:;">
            <span class="name">服饰箱包榜</span>
            <img src="http://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
          <a href="javascript:;">
            <span class="name">服饰箱包榜</span>
            <img src="http://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
          <a href="javascript:;">
            <span class="name">服饰箱包榜</span>
            <img src="http://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
          <a href="javascript:;">
            <span class="name">服饰箱包榜</span>
            <img src="http://yanxuan.nosdn.127.net/271eb0b3d94e80579afdeb614cc240ad.png?imageView&quality=65&thumbnail=200x200" alt="shop">
          </a>
        </div>
      </div>
    </div>
    <Split/>
    <div class="twoByTwo">
      <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
        <div class="text">
          <div class="title">断单补货王</div>
          <div class="desc">严选必买爆款</div>
        </div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&thumbnail=200x200&quality=75" alt="left">
        </div>
      </a>
      <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
        <div class="text">
          <div class="title">断单补货王</div>
          <div class="desc">严选必买爆款</div>
        </div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&thumbnail=200x200&quality=75" alt="left">
        </div>
      </a>
      <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
        <div class="text">
          <div class="title">断单补货王</div>
          <div class="desc">严选必买爆款</div>
        </div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&thumbnail=200x200&quality=75" alt="left">
        </div>
      </a>
      <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
        <div class="text">
          <div class="title">断单补货王</div>
          <div class="desc">严选必买爆款</div>
        </div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&thumbnail=200x200&quality=75" alt="left">
        </div>
      </a>
    </div>
    <Split/>
    <div class="brandProvide">
      <div class="line">
        <span class="text">
          <span>品牌制造商直供</span>
        </span>
        <span class="more">
          <span>更多</span>
          <span class="iconfont icon-jiantou-"></span>
        </span>
      </div>
      <div class="list">
        <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
          <div class="text">
            <div class="title">断单补货王</div>
            <div class="desc">严选必买爆款</div>
          </div>
          <div class="pic">
            <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&thumbnail=200x200&quality=75" alt="left">
          </div>
        </a>
        <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
          <div class="text">
            <div class="title">断单补货王</div>
            <div class="desc">严选必买爆款</div>
          </div>
          <div class="pic">
            <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&thumbnail=200x200&quality=75" alt="left">
          </div>
        </a>
        <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
          <div class="text">
            <div class="title">断单补货王</div>
            <div class="desc">严选必买爆款</div>
          </div>
          <div class="pic">
            <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&thumbnail=200x200&quality=75" alt="left">
          </div>
        </a>
        <a href="javascript:;" style="background-image:url(https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?imageView&thumbnail=343x264&quality=75);background-size:100% 100%;">
          <div class="text">
            <div class="title">断单补货王</div>
            <div class="desc">严选必买爆款</div>
          </div>
          <div class="pic">
            <img src="https://yanxuan.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?imageView&thumbnail=200x200&quality=75" alt="left">
          </div>
        </a>
      </div>
    </div>
    <Split/>
    <div class="choice">
      <div class="line">
        <span class="text">
          <span>专题精选</span>
        </span>
        <span class="more">
          <span>更多</span>
          <span class="iconfont icon-jiantou-"></span>
        </span>
      </div>
      <div class="swiper-container2">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" style="width 480px">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/62b4ed4ee9c35cb715eb7bdf901c50d4.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="img">
            </a>
            <div class="text">
              <div class="name">
                <h4>这颗流油的蛋黄肉粽, 带你寻找传统端午味</h4>
              </div>
              <div class="desc">五月初五，安康过端午</div>
            </div>
          </li>
          <li class="swiper-slide" style="width 480px">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/62b4ed4ee9c35cb715eb7bdf901c50d4.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="img">
            </a>
            <div class="text">
              <div class="name">
                <h4>这颗流油的蛋黄肉粽, 带你寻找传统端午味</h4>
              </div>
              <div class="desc">五月初五，安康过端午</div>
            </div>
          </li>
          <li class="swiper-slide" style="width 480px">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/62b4ed4ee9c35cb715eb7bdf901c50d4.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="img">
            </a>
            <div class="text">
              <div class="name">
                <h4>这颗流油的蛋黄肉粽, 带你寻找传统端午味</h4>
              </div>
              <div class="desc">五月初五，安康过端午</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Split/>
    <div class="crowd">
      <div class="line">
        <span class="text">
          <span>众筹</span>
        </span>
        <span class="more">
          <span>更多</span>
          <span class="iconfont icon-jiantou-"></span>
        </span>
      </div>
      <div class="split"></div>
      <div class="one">
        <a href="javascript:;">
          <div class="pic">
            <img src="https://yanxuan.nosdn.127.net/87012c3c9961effbdceb289a9e0bab5e.png?imageView&thumbnail=210x210&quality=75" alt="img">
          </div>
          <div class="content">
            <div class="name">西湖韵88头国宴收藏套装</div>
            <div class="price">￥2000起</div>
            <div class="percent">
              <div class="left"></div>
              <div class="right">20%</div>
            </div>
            <div class="count">121人已支持</div>
          </div>
        </a>
      </div>
      <div class="one">
        <a href="javascript:;">
          <div class="pic">
            <img src="https://yanxuan.nosdn.127.net/87012c3c9961effbdceb289a9e0bab5e.png?imageView&thumbnail=210x210&quality=75" alt="img">
          </div>
          <div class="content">
            <div class="name">西湖韵88头国宴收藏套装</div>
            <div class="price">￥2000起</div>
            <div class="percent">
              <div class="left"></div>
              <div class="right">20%</div>
            </div>
            <div class="count">121人已支持</div>
          </div>
        </a>
      </div>
    </div>
    <Split/>
    <EightOfMSite/>
    <EightOfMSite/>
    <EightOfMSite/>
    <EightOfMSite/>
    <EightOfMSite/>
    <EightOfMSite/>
    <EightOfMSite/>
    <EightOfMSite/>
    <div class="footer">
      <div class="button">
        <a href="javascript:;">下载APP</a>
        <a href="javascript:;">电脑版</a>
      </div>
      <p class="copyright">
        <span>网易公司版权所有 © 1997-2019</span>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import EightOfMSite from '../EightOfMSite/EightOfMSite.vue'
import Split from '../Split/Split.vue'
export default {
  data() { 
    return {

    }
  },
  mounted(){
    this.scroll = new BScroll('.cateList', {
      click: true
    })
    new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      pagination: {     // 如果需要分页器
        el: '.swiper-pagination'
      }
    })
    new Swiper ('.swiper-container2')
  },
  components: {
    Split,
    EightOfMSite
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .home
    background white
    width 750px
    .headerWraper
      width 100%
      height 148px
      background white
      top 0
      left 0
      z-index 5
      bottom-border-1px(#d9d9d9)
      .header-top
        width 100%
        height 88px
        display flex
        align-items center
        padding 3px 5px
        box-sizing border-box
        a
          width 138px
          height 40px
          display inline-block
          margin-right 10px
          text-align center
          vertical-align middle
          background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        .input 
          padding 5px 15px
          width 442px
          height 56px
          background #ededed
          box-sizing border-box
          border-radius 5px
          display flex
          align-items center
          justify-content center
          font-size 24px
          color #666
          vertical-align middle
          .placeholder
            padding-left 5px
        .login
          width 74px
          height 40px
          line-height 40px
          margin-left 10px
          border 1px solid #b4282d
          border-radius 10px
          font-size 24px
          color #b4282d
          text-align center
          vertical-align middle
      .header-bottom
        width 100%
        height 60px
        padding 0px 10px
        box-sizing border-box
        .cateList
          display flex
          align-items center
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          .cateItem
            margin 0 10px
            span
              color #333
              font-size 22px
        .toggleWrap
          position absolute
          width 30px
    .swiper-container
      width 100%
      height 370px
      margin-top 148px
      img
        width 100%
    .servicePolicy
      width 100%
      height 72px
      display flex
      align-items center
      .serviceItem
        // box-sizing border-box
        width 33.33%
        text-align center
        span
          color #B4282D
          font-size 22px
    .categoryLists
      width 100%
      height 372px
      ul
        width 100%
        display flex
        flex-wrap wrap
        align-item center
        justify-content center
        li
          width 20%
          padding 10px
          box-sizing border-box
          img
            width 100%
          span
            font-size 16px
            text-align center
    .longTab
      .changeGoods
        width 100%
        height 280px
        background-size 100% 100%
        background-position left top
      .twoPlusThree
        padding 20px
        width 100%
        height 558px
        box-sizing border-box
        ul
          width 100%
          height 558px
          display flex
          align-item center
          flex-wrap wrap
          li
            width 50%
            height 186px
            padding 2px
            box-sizing border-box
            a
              display block
              width 100%
              height 100%
              background-size contain
              background-position left top
              img 
                width 100%
                height 100%
      .threePlusOne
        margin 20px
        width 710px
        height 220px
        display flex
        align-item center
        a
          width 231px
          height 220px
          display block
      .allCates
        width 100%
        height 80px
        a
          width 100%
          height 100%
          display block
      .fourPlusThree
        width 710px
        height 680px
        margin 20px 20px 0
        ul
          display flex
          align-item center
          flex-wrap wrap
          li
            width 25%
            height 220px
            padding 2px
            box-sizing border-box
            a
              width 100%
              height 100%
              background-size contain
              background-position left top
              display flex
              align-item center
              flex-direction column
              .itemTitle
                width 147px
                height 66px
                font-size 24px
                text-align center
                margin 5px 0
              img
                width 140px
                height 140px
    .BossRecommend
      a
        img
          width 100%
          height 126.75px
    .twoPlusTwo
      width 100%
      box-sizing border-box
      padding 10px 25px 25px
      ul
        display flex
        align-item center
        flex-wrap wrap
        li
          width 50%
          height 264px
          padding 2px
          box-sizing border-box
          a
            display block
            width 100%
            height 100%
            background-position left top
            display flex
            align-item center
            flex-direction column
            justify-content center
            flex-wrap wrap
            .title
              margin 10px 0 0 10px
              font-size 30px
            .desc
              margin 10px 0 0 10px
              font-size 24px
            .pics
              img
                width 150px
                height 150px
                display inline-block
    .privateOrder
      padding 5px
      box-sizing border-box
      .text
        width 750px
        height 100px
        line-height 100px
        vertical-align middle
        font-size 32px
        padding 20px
        box-sizing border-box
      .swiper-container
        margin-top 0px
        width 100%
        height 370px
        .swiper-wrapper
          .swiper-slide
            a
              width 216px
              height 300px
              margin-left 18px
              display inline-block
              img
                display block
                width 216px
                height 216px
                background-position left top
                background-color #f5f5f5
              .shop
                width 216px
                height 72px
                text-align center
                vertical-align middle
                white-space wrap
                font-size 25px
                .name
                  color #333
                .price
                  color #b4282d
        .swiper-pagination
          height 80px
          // >span.swiper-pagination-bullet-active
          //   background #b4282d
          // >span.swiper-pagination-bullet
          //   width 12px
          //   height 12px
          //   border-radius 50%
    .limitTime
      width 100%
      .line
        height 100px
        padding 20px 20px
        box-sizing border-box
        .text
          height 100px
          line-hight 100px
          font-size 28px
          margin-left 20px
          >span
            margin-right 15px
        .more
          font-size 28px
          height 100px
          line-hight 100px
          float right
          margin-right 15px
          >span
            margin-right 15px
      .list
        width 100%
        display flex
        align-item center
        flex-wrap wrap
        padding 0px 24px
        box-sizing border-box
        a
          width 216px
          height 299px
          padding-right 18px
          display block
          img
            width 216px
            height 216px
            background-color #F5F5F5
          .price
            font-size 28px
            color #b4282d
            margin-right 12px
          .oldPrice
            font-size 24px
            color #7f7f7f
            text-decoration line-through
    .newShop
      width 100%
      .line
        height 100px
        padding 20px 20px
        box-sizing border-box
        .text
          height 100px
          line-hight 100px
          font-size 28px
          margin-left 20px
        .more
          font-size 28px
          height 100px
          line-hight 100px
          float right
          margin-right 15px
          >span
            margin-right 15px
      .list
        width 100%
        display flex
        align-item center
        flex-wrap wrap
        padding 0px 24px
        box-sizing border-box
        a
          width 216px
          height 299px
          padding-right 18px
          display block
          img
            width 216px
            height 216px
            background-color #F5F5F5
          .shop
            width 216px
            height 72px
            text-align center
            vertical-align middle
            white-space wrap
            font-size 25px
            .name
              color #333
            .price
              color #b4282d
    .hot
      width 100%
      .line
        height 100px
        padding 20px 20px
        box-sizing border-box
        .text
          height 100px
          line-hight 100px
          font-size 28px
          margin-left 20px
        .more
          font-size 28px
          height 100px
          line-hight 100px
          float right
          margin-right 15px
          >span
            margin-right 15px
      .list
        width 100%
        display flex
        align-item center
        flex-wrap wrap
        padding 0px 24px
        box-sizing border-box
        .special
          width 690px
          height 280px
          padding 0px 30px
          margin-bottom 18px
          background #FEF0DF
          >a
            width 100%
            height 100%
            display block
            display flex
            align-item center
            justify-content center
            .pic
              width 280px
              height 280px
              display inline-block
              background url(http://yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
            .text
              width 350px
              height 280px
              display flex
              flex-direction column
              align-item center
              justify-content center
              flex-wrap wrap
              display inline-block
        >a
          width 216px
          height 299px
          padding-right 18px
          display block
          img
            width 216px
            height 216px
            background-color #F5F5F5
          .shop
            width 216px
            height 72px
            text-align center
            vertical-align middle
            white-space wrap
            font-size 25px
            .name
              color #333
            .price
              color #b4282d
    .cateHot
      width 100%
      .line
        height 100px
        padding 20px 20px
        box-sizing border-box
        .text
          height 100px
          line-hight 100px
          font-size 28px
          margin-left 20px
      .content
        width 100%
        padding 0px 25px
        box-sizing border-box
        .lineOne
          width 100%
          display flex
          align-item center
          flex-wrap wrap
          padding 0px 5px
          a
            width 340px
            height 200px
            display block
            margin 0px 8px 8px 0px
            background-color #F9F3E4
            span
              height 200px
              line-height 100px
              vertical-align middle
            img
              width 200px
              height 200px
              float right
        .lineTwo
          width 100%
          display flex
          align-item center
          flex-wrap wrap
          a
            width 165px
            height 180px
            background-color #F5F5F5
            margin 0px 10px 10px 0px
            display block
            display flex
            flex-direction column
            align-item center
            flex-wrap wrap
            span
              height 40px
              line-height 40px
              font-size 20px
              text-align center
            img
              width 120px
              height 120px
              padding 0px 22.5px
    .twoByTwo
      width 100%
      box-sizing border-box
      padding 25px
      display flex
      align-item center
      flex-wrap wrap
      a
        display block
        width 343px
        height 220px
        padding 10px 0 0 10px
        box-sizing border-box
        background-position left top
        display flex
        align-item center
        flex-direction column
        justify-content center
        flex-wrap wrap
        background-image url(https://yanxuan.nosdn.127.net/dc4bbc16d3946fddb71382f8132210b9.png?imageView&thumbnail=343x220&quality=75)
        background-size 100% 100%
        margin 0px 2px 2px 0px
        .text
          float left
          .title
            font-size 30px
          .desc
            font-size 24px
        .pic
          float right
          img
            width 200px
            height 200px
            display inline-block
    .brandProvide
      width 100%
      box-sizing border-box
      padding 25px
      .line
        height 100px
        padding 20px
        box-sizing border-box
        span
          height 100px
          line-hight 100px
          font-size 28px
        .text
          margin-left 20px
        .more
          float right
      .list
        width 100%
        display flex
        align-item center
        flex-wrap wrap
        a
          display block
          width 343px
          height 220px
          padding 10px 0 0 10px
          box-sizing border-box
          background-position left top
          display flex
          align-item center
          flex-direction column
          justify-content center
          flex-wrap wrap
          background-image url(https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1)
          background-size 100% 100%
          margin 0px 2px 2px 0px
          .text
            float left
            .title
              font-size 30px
            .desc
              font-size 24px
          .pic
            float right
            img
              width 200px
              height 200px
              display inline-block
    .choice
      width 100%
      .line
        height 100px
        padding 25px
        box-sizing border-box
        span
          height 100px
          line-hight 100px
          font-size 28px
        .text
          margin-left 20px
        .more
          float right
      .swiper-container2
        width 480px
        padding 0px 30px
        box-sizing border-box
        margin 0px 0px 20px
        .swiper-wrapper
          width 480px!important
          height 378px
          padding 0px 30px
          box-sizing border-box
          .swiper-slide
            width 480px!important
            height 100%
            margin-right 32px
            border-radius 8px
            background-color #f5f5f5
            a
              display block
              width 480px
              height 267px
              margin-bottom 16px
              img
                width 100%
                height 100%
                display inline-block
            .text
              width 480px
              padding 0px 20px
              box-sizing border-box
              .name
                font-size 30px
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
              .desc
                font-size 24px
    .crowd
      width 100%
      .line
        height 100px
        padding 25px
        box-sizing border-box
        span
          height 100px
          line-hight 100px
          font-size 28px
        .text
          margin-left 20px
        .more
          float right
      .split
        width: 100%
        height: 5px
        background: #f4f4f4
      .one
        a
          width 100%
          height 240px
          padding 0px 45px
          box-sizing border-box
          display flex
          align-items center
          .pic
            width 210px
            height 210px
            margin-right 20px
            background-color #f5f5f5
            img
              width 100%
              height 100%
              display block
          .content
            width 450px
            font-size 28px
            .name
              width 100%
              height 41px
              font-size 28px
            .price
              height 48px
              font-size 32px
              color #b4282d
            .percent
              width 100%
              height 6px
              margin-top 15px
              position relative
              .left
                width 80%
                height 6px
                background #d8d8d8
                border-radius 30px
              .right 
                position absolute
                right 20px
                top -10px
            .count
              height 36px
              font-size 24px
              color #7f7f7f
              margin-top 15px
    .footer
      width 100%
      height 245px
      background-color #414141
      padding 54px 20px
      box-sizing border-box
      margin-bottom 98px
      .button
        width 710px
        height 62px
        margin-bottom 36px
        text-align center
        a
          width 172px
          height 62px
          line-height 62px
          display inline-block
          border 1px solid #999
          font-size 24px
          color #fff
          text-align center
          vertical-align middle
          &:first-child
            margin-right 50px
      .copyright
        text-align center
        white-space wrap
        color #999
        width 710px
        height 64px
        font-size 24px
        line-height 32px
        >span
          width 710px
          height 27px
          display block
          &:first-child
            margin-bottom 2px
</style>