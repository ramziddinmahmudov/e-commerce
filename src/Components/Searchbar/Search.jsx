import React, { useState, useEffect } from "react";
import Button from "./Buttun";
import ProductList from "./ProductList";
import "./Search.css"

const products = [
  {
    name: "Samsung Galaxy S24 Ultra",
    category: "Galaxy S24 Ultra",
    imageUrl:
      "data:image/webp;base64,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",
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    category: "Galaxy S23 Ultra",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    category: "Galaxy S22 Utra",
    imageUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw8NDxAQDQ0PDw4QDxAPDxAPDxAQFREYFxYRFRUYHSggGBoxGxUVITEhMS0rLi4uFx8zODMsOSgtLisBCgoKDg0OGxAQGzUlICYrLTU3Li0tLS0rLy8tListLS0tLS0tLystKy0tLS0tLS0tKy0tLS0rKy0tLS0tLy0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUDAgj/xABNEAACAQIDAggHDAYIBwAAAAAAAQIDEQQFIRIxBgcTIkFRYXEXVIGRobGzFDIzNHJ0dZOissHRIyRCc5LwCBU1UmKCg7QlU2RlwsPh/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEDAgQFBv/EACYRAQACAgEDBAIDAQAAAAAAAAABAgMRMQQSIRNBUXEyMxQigQX/2gAMAwEAAhEDEQA/ALxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABi4uYAGbi5gAZuLmABm4uYAGbi5yeEOeQwEaM5wlU5evGglFpbLcJy2nfotB+cjsuMWmm17mqP/Uh+ROpYWyVrOplOLi5BfCPT8VqfWQ/IeEin4rU+sgO2WPrU+U6uLkE8JNLxap9ZD8jHhKpeLVPrIfkO2T18fynlxcrTHccWDw6lyuHrJxlCNk4yvtR2r3NHw75d4viPskaZxaJjcLZuLlTeHjL/ABfEfZHh3y/xfEfZCe5bNxcqbw75f4viPsjw75f4viPsg2tm4uVN4d8v8XxH2TMePbLtP0GI+ywbWxcXONwX4QU8zozxFKMoRhWq0bStduFrvu1OwEs3FzAAzcXMADIMAAAAAAAAGQMAACHcZnwWA+kKf+3rFNcK84lhVGEHszntva6Uk1u7dfQXJxnP9DgfpCn/ALesU/wkyaONhZy5OpBycZ71Z70+zReYsjhp5JrGX+3CNZRwgxFPEwpVZurTqSjFpyjUttOylGab6X19Z1OEfCOeGq8jTUU4wUpSnFyu3uikmrd5q5HwZUKsa1StCtybvGNN7S2lubf4EnjwawuZVLYipDDuFOTVSUtnas/eb9d7fnI86Jtj9SPG2vlOYe6qEK1tlyTuuhNNp27NDYlI8qFKFKEacEowirRS6EJSM2raY34RLhg9Z/vaPsmRYlHC79v95R9kyMwi5NRSu20kutvoKp5dLF+EN3CZXUqRcrWitzve700stelGpVouDa323tXsWNmmUzwuXxSpyjs4lNqS/SRpydu/30VZrdtd9ubweySEozq1rW1spq8U03qlfTo013eaa12m9+1HI5PiJwjNRc1aKSitqdm3ayW895cHaqp7cuZPXmO111Lfo/zO3j+EOxJwoJbKlrJu19b6dK3ek52KzitVvooLq6vL19v5It9OFPqW90cq0nFuLVmhTWq716zYxLb1b1PCHvl3r1mE00vrbcP1FxN/2dW+f4v1xJ2QTib/ALPrfP8AF+uJOytMAACQAAAAAM3MAAAADAAAAAQnjSqWp5fH+9j4u/dh6v5lGcPMXOKp002qc+UcrftNNWT7Ndxd3Gs+Zl3z7/0VCps9WHlSl7ptye1o9dpS6Nm2tzOPxad7azbQbJa8qWKoulJtTnCLVrbUZOzTR2uFWa1qdbkoTlSgoRlFx/bbfS+rR+Y9sghgFUvQcpVkns8r763Ts6W/E7WJoU6tlUhCpbdtxUrecRHhGTLEX3MNfJcXOth6dSp79p3drbVm0pW8htSkfLdtFol0HnKRnpq2nztG+Fe6X7yj7JnhwHyd47G06b5sIbVWctNFBXS8rSXnPbhR72X7yl7KR9cCcPi6ddYrDwlanCo5Ss9mUZQaUL9r0XaVTy6WOdY4+k74wcxi406ScW3sxlznZq19bPuIpnuKqUKNKC97VUnFqScZJWu1su37Vuw6XCWd5x5R6umnKMNlypz1vGy03pdHTbWzNXMcKqeHpSqJ6tzjTk77La3t9T00W+xfWN+IU2mYncozh6Epc57+jT0nrXioqy9PT2n1Uxj1/nzH1KDcdp//AHvL9REKJtO9y5Van5/V3nhCNpLvXrN+cX5OhGvGleUeraXrKLQ3KWfpbiYqJ4HEx6YZhik+26hL8SfFe8SvxPG/SWI+5TLCKJWVnwAAhkAAAAAAAAAAAAAAB54irGnCdSclCEIylKUtIxildyfZYCE8bEHyWXy0tHHxT69aFW3qKI4cU5tU5q7pxdRS6lJ2s2WPnXC6rmlKO0qDoUM2VGlOk5KpPZoVWpSjdpK0vORiq07p6p3unqmWRHjTQvk1l7lf5PTlLEUeTvdShKT6kneT7rE9lI8adKFO6hCME9+xFRv5hKRlWNKs2bvl9SkeUpnzKZ5SmZNabOnkGSQx1Suqmy4w5C21b38k0nrbctp71qkSXNcJWw8FD3lNbLcYKE4qN7N23OW/f19l1GeD2e4fBVJrERajWnRUayipulJU52vF716SWZPwuwOLqUaMXGtWxM1DYkpxmk7pq+yrvRtPsSKvd18W5x1+nLhlmDw+1iat1iLuUJTanzNVfYUX+1u377dZDM3qVcQ5VNWpTbgpJK0dVFaabujTcWnn/BKPvtZQblszjtJtq6u0+zyFeY6rVwU1Fpcjfm3ipttdDUuteTRl1PHlTkmeEWhhm2m1bU6MXHZs9F6Wd7E4SFehHE0oKEZXVWMbqMKlt6WuzF23dHlRwp0dbWtr1dJtVjcNS99zqWlVs72XmNdQ50dOleTU6FWy7v51NfbV4u2m0vWa+Sraw2iX6D4mabWCxcna08xxTXkUF60T4gfE3VUsDiY/3Mxxafl2ZfiTw1ZbdeAAEMgAAZAAGAAAMmAAAAAi/GbmHubKsVO9nOKprtUnzl/CpEoKo/pCZjyeCoYdPWrOc3/lSivROXmAhPBfLZQyXDYtrXE5zJ3/AMEMPOMftKoa1SWr736yd5vlvuPg9klC2zJV8NOa6p1KFapL7U2V7Unq+9+stpw5nVzq7MpHlOZ8ymeUpFjSmz6lM8mw2fDYRy0M5rSpqNSLtKFWjKL6moSaPfIsfRw+Lp4nDunQnC2w6jaUXKNnJP8AZabe+y3a2NTP/g/9Sl9yRHzXnl3MP66/T9CYHh65YbYxlFwq3knFJLc7bSk96v0216NDSz/AUMfhpzozU9hOezC7q07dcLXt2r0lQ4LOZRjTp7Mf0UXFPW7p3lOSbd7at7l+TkuT5jWwSdaM1Uo3fNTabi2lO6T0dvTqbFJrpq5q5It54drgxD3MpQkvdFKpBw5JWjLVq1ujounr0GM3yJuMatK6pOntpTspQte8Wuu8beVbtx95Zh4VYuFOTtNRjCV5JLZjzVrqui7X4mvTz7HYRyhV2eTpwUadKS5qjd81bO/z9Rn3zXhXWnf4mXMpcGcTVU5tKFOCesnva6vzOTXwfJTipb9padRLXwvrVNiCVOnPXlErxg07txd/L5bbiNZpLbkm5XjtJ81JJu66t3SrdpXbJM8tqmGIjwvLiaptYPFvolmWKce5KC9aJ+yC8T39n1vpDGfeROSiWxWPAACEsmAAAAAAAAAAAMmABQ3HPJ4/OcFlsW+dUwtBpdc5Jt+ar6C+ShuDT/rPhc63vqeHeJxC+Sk40/TOn5gJ9xtxUcJg0tEsfRSXUlQqpFK1JavvfrLq433+qYT5/S9jVKQqS1fe/WXY+HJ639g2fLZhs+WzNqRDLZ8tmGz5bDKIaOffBf6lP7kiPnfz34JfvKf3JHBTNe3LtYf1x9PXDRbd10Xd+498PmFSk2k3Zu9r6X6+08cPiJQaa3Lf3Pf+PnNjFYO0VKLv1rc7dEvMTEfDK0xvU+6XcFseqzVNXj5bRi722bvVaW8z7Sd4zIqGLpUq1WpKKhHYjUitbKbUYuPVo9e19xWnBFSr1o2h7xKUqmt4Uk4uTbv1JR3b5IsbBZxOU1opUoScXG1pT2tXGy6739PTZX982pppelGPLNo4mEQ4VZbHC1WrTVOKioSlbnxcbpppWtrbr5pzsrw7rpSso0ou+6yequu319vQTnPqUK+3TxE6ezQ2o03KSUpKG7aTtzradG9nlkuGwzjCLs7vSEddp9tt34a7jn58/bDtdJ03qSsPijVsDiPpHHffRNyGcVa/VcZbd/WuY+T9LuJmXRw1ZjUyAAkAABkC4AwAAAAAAADQz/Ge5sJia6dnTo1JR+XsvZXnsVL/AEfcHymIzTHtabVPD035XKS9FMmXHHmSw2U1tbOrOFNW36Xn/wCCXlNTiIy7kMlpVGrSxVavXd99trk4+imn5QPbji+J4T5/S9jVKNm9X3svHjk+J4X5/S9jVKLk9X3supw5XWfs/wAZbPlsw2fLZk14hls+WzDMNhlENTPPgV8un9yRwTvZ38Cvl0/uSOCUTy6+L8IelO259O6x0JybUb350HsKyXfF9n4HOj/PWu06Hwt5txbcl7583Rrm9HWiYlNo2sfLaccNhqeHoU1UU6SqVZ7C51S2qdtySv3abz2y5Ojeo1FylunLq6na3Q01vWhp5ZjbYeFOMlKSglK0Xe7u3e9rx37upDB4iriXUpxiuQWwr75Rm+hdLVndXtv3dIzZIpVj0uC2S/DGPw0KzlJtSTvZ63k2tXfp1dzbyqKoJcmrN2T05zXV2R7DEo0aNoTm0mtW7667u3v6TFDM6LlGOsY7W96XS1/lHDz5Zt4jh6jp8EU8zytHipf6pi+t5nj79/KE0IVxUNPB4prc8zx7Xc6hNTsxw87PM/cgAJQAAAAABm5gAAAAAAFMf0i8xtTwuFT1alUkuvaklH7kvOWpwYy73HgcHhf+RhqNN9sowSk/Pcpnh5/xLhRgsEudCGIoRfT+jp2lUXoqF8gQHjm+JYX5/S9lVKKk9/ey9OOj4jhvn9H2VUoiW997LacOZ1f7f8GzAPiSMlEQy2YufLXaYt2kbZaeOdfAr5dP7kzgndzn4FfLp/cmcIqnl1MX4QzGVjbjj3pdJtXs7Jefre/XtNMELHewGcpR2JJwT3uN25NxUZdKsml0egs/I8Ps06WxFNRT2nLROzd5Q39eva+0pIlvAbhDLD1YYapJqhOUlHS9qk0opP8Aw/jZmn1uO18f9fZ0P+dmpjyat7+/wm/CnCPZdWG+66NYp3089iNUMG20993zrrRRTRN8bZpQm1Z2VnpfymnSw6UebbSS7t+n89hxMGWdaeizYY3tYHFGv1LEfSWO++ibkK4qFbCYpf8Ac8w9oTU9NHDx08yAAlAAAAAAAAAAABiUlFNvRJNt9SRk4vDTGe58uxtW9rYepFPqc1sJ+eQFRcWF8w4S4rGyjdUaNerey5tSpJRt32nPzMvcqL+jzgHyGYY+Sd8RiY0ot9MacXJtdl6lv8pboEA46PiOG+f0fZVSiJb33svfjnV8FhV/19L2NUomUdX3stpw5nVft/x8M+Wfdj5aMlD5Zg+mjFiGTWzn4FfLp/cmcI7udfAr5dP7kjhFU8upi/CAAELA6eSZpHDT59GFenKUHKMrp816Wku/t3HMBExExqWVbTWdwtijmdLGxjVpPS/Og7qVPsdtNxuznfmR0aVJpO2l2157ED4HY6hh5vlHJVqqjGDUG1ZtXV1rd9GhNYqDrKCvGM7uadm7bn3e+OFmwRivqvD0vT9TObHu0+VncU/xPFfSeP8AaImpCeKb4nivpPH+0RNjuxw8zPM/cgAJQAADNwYAACwsAAsLADmcJ8oWYYLE4JvY5elOClrzZ74y06FJJ+Q6gA5nBvJKOWYSjgsOnyVGNk5Wc5ybvKcn0ttt+U6RkWAjnDbg5LNKNCjGpGlyWJhXk5Jvaiqc47KtufPT8hXsuJzE3dsVQ3/3KhcljJMWmFV8FLzu0KY8DeK8bofwVDHgaxXjdD+CoXQYsT3yw/i4/hTHgZxXjdD+CoY8DOK8bofwVC6LCw75T/Gx/Ck8bxJYirScPddHb24SjzZqNlFppuzfSc+PEFimtcbQi+pQqSXnsi/bGLEbWxSIjUKE8AOI8eo/VzHgBxHj1H6uZflhYhOlB+AHEePUfq5jwA4jx6j9XMvywBpQ1LiGxUJRnHH0VKLTi+Tno07pnQhxPZkpJvNY79bQne3SXTYxYiaxPMMotavEy4HAvg/PLMPVoTqKs6mJr19pJrSo07O+96PznfFjJKGALCwACwsABkAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=",
  },
  {
    name: "Samsung Galaxy S21 ultra",
    category: "Galaxy S21 Ultra",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Samsung Galaxy S20 Ultra",
    category: "Galaxy S20 Ultra",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Samsung Galaxy S19 Ultra",
    category: "Galaxy S19 Ultra",
    imageUrl:
      "data:image/jpeg;base64,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",
  },
];

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const handleSearch = (term) => {
    if (term === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Search the other things</h1>
      <input
        className="input"
        type="text"
        placeholder="Search the website"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="btn_s">
        <Button onClick={() => handleFilter("Galaxy S24 Ultra")}>
          Galaxy S24 Ultra
        </Button>
        <Button onClick={() => handleFilter("Galaxy S23 Ultra")}>
          Galaxy S23 Ultra
        </Button>
        <Button onClick={() => handleFilter("Galaxy S22 Ultra")}>
          Galaxy S22 Ultra
        </Button>
        <Button onClick={() => handleFilter("Galaxy S21 Ultra")}>Galaxy S21 Ultra</Button>
        <Button onClick={() => handleFilter("Galaxy S20 Ultra")}>Galaxy S20 Ultra</Button>
        <Button onClick={() => handleFilter("Galaxy S19 Ultra")}>Galaxy S19 Ultra</Button>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
