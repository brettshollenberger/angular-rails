module Static
  module Api
    class CurriculaController < ApplicationController
      Curricula = Struct.new(:id, :name, :source_id)

      def index
        @curricula = [
          [1, "Migrancy, Culture, and Identity Literature", nil],
          [2, "Javascript", nil],
          [3, "Javascript for Beginners", 2]
        ].map { |c| Curricula.new(*c) }
      end
    end
  end
end
