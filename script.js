$(document).ready(function () {

    var produk = [
      "Persia",
      "Siberian Forest",
      "Maine Coons",
      "Siamese",
      "American Shorthair",
    ];

    var BanyakProduk = [
      {
        namaproduk: "Persia",
        jumlah: 20,
      },
      {
        namaproduk: "Siberian Forest",
        jumlah: 5,
      },
      {
        namaproduk: "Maine Coons",
        jumlah: 10,
      },
      {
        namaproduk: "Siamese",
        jumlah: 15,
      },
      {
        namaproduk: "American Shorthair",
        jumlah: 7,
      },
    ];
    

  
    var n = 1;
    $("#tambah-barang").hide();
    $("#barang-" + n).change(function () {
        $("#tambah-barang").show();
    });
  
    //show product when pesan produk clicked
    let tampilPesanan = "";
    $("#pesan").click(function () {
      for (let i = 1; i <= n; i++) {
        let jumlah_idx = BanyakProduk.findIndex(
          (data) => data.namaproduk === $("#barang-" + i).val()
        );
        if ($("#jumlah-" + i).val() <= BanyakProduk[jumlah_idx].jumlah) {
          //Pengurangan jumlah stok barang
          BanyakProduk[jumlah_idx].jumlah -= $("#jumlah-" + i).val();
          //output message
          tampilPesanan += "<ol> <h3>Barang Pesanan ಇ/ᐠ ̥ᵔ  ̮  ᵔ ̥ ᐟ\ಇ</h4>"
          tampilPesanan +=
            "<li>" +
            $("#barang-" + i).val() +
            " (" +
            $("#jumlah-" + i).val() +
            ")</li>";
          tampilPesanan += "</ol>"
          $("#list-produk").html(`${tampilPesanan}`);
        } else {
          alert(
            `Produk ${BanyakProduk[jumlah_idx].namaproduk}. Jumlah Stok ${BanyakProduk[jumlah_idx].jumlah}`
          );
        }
      }
      let nama = $("#nama").html(`${$("#pemesan").val()}`);
      $("#nama").show() = "<h4>Nama Pemesan :</h4>" + nama ;
    });
  
    $("#tambah-barang").click(function () {
      let jumlah_idx = BanyakProduk.findIndex(
        (data) => data.namaproduk === $("#barang-" + n).val()
      );
      n += 1;
      let pesanan = `<div class="form-produk"><div class="left" id="id-${n}"><label for="produk-${n}">Produk</label><br><select id="barang-${n}" required><option value="" hidden selected>Pilih produk</option>`;
      produk.map((data) => {
        pesanan += `<option value="${data}">${data}</option>`;
      });
      pesanan += `</select><br></div><div class="left cont-3"><label for="jumlah-${n}" style="padding-left: 5px;">Jumlah</label><br><input type="number" id="jumlah-${n}" class="jumlah" required><br></div>`;
      pesanan += `<div id='button-delete' class="left pd-top"><button id="hapus-${n}" class="btn btn-danger"><div>Hapus</div></button></div><br>`;
      $(this).before(pesanan);
  
      $("#hapus-" + n).click(function () {
        $("#id-" + n).nextAll();
        $(this).parent().parent().remove();
        $("#id-" + n).closest("div");
        $(this).parent().parent().remove();
      });

      if(n>=5){
        $("#tambah-barang").hide();
      }
    });
  });